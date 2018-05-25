#!/usr/bin/env bash
set -e

PROJECT="humaniq-168420"
DOCKER_BUILD_PATH="eu.gcr.io/${PROJECT}"
DOCKER_IMAGE="${DOCKER_BUILD_PATH}/${IMAGE_NAME}"
GOOGLE_ZONE="europe-west1-b"
KUBE_NAMESPACE="default"

check_docker_image_name() {
    if [[ "${IMAGE_NAME}" == "" ]]; then
        echo "Environment variable IMAGE_NAME not set"
        exit 1
    fi
}

check_APP_VERSION() {
    if [[ "${APP_VERSION}" == "" ]]; then
        echo "Environment variable APP_VERSION not set"
        exit 1
    fi
}

check_service_name() {
    if [[ "${SERVICE_NAME}" == "" ]]; then
        echo "Environment variable SERVICE_NAME not set"
        exit 1
    fi
}

check_gcloud_email() {
    if [[ "${GCLOUD_EMAIL}" == "" ]]; then
        echo "Environment variable GCLOUD_EMAIL not set"
        exit 1
    fi
}

check_gcloud_zone() {
    if [[ "${ZONE}" != "" ]]; then
        echo "Override default zone with ${ZONE}"
        GOOGLE_ZONE=$ZONE
    fi
}

check_helm_namespace() {
    if [[ "${NAMESPACE}" != "" ]]; then
        echo "Override default zone with ${NAMESPACE}"
        KUBE_NAMESPACE=$NAMESPACE
    fi
}

gcloud_fetch_base() {
    check_docker_image_name
    sudo docker pull ${DOCKER_IMAGE}:base
}

gcloud_install() {
    echo "-= Google auth =-"

    check_gcloud_email

    # Download gcloud and install it
    mkdir -p /tmp/gcloud
    curl -L https://dl.google.com/dl/cloudsdk/channels/rapid/downloads/google-cloud-sdk-202.0.0-linux-x86_64.tar.gz | tar xz -C /tmp/gcloud/

    /tmp/gcloud/google-cloud-sdk/install.sh --quiet
    source /tmp/gcloud/google-cloud-sdk/path.bash.inc

    # Install components
    gcloud components install docker-credential-gcr kubectl --quiet

    #decrypt auth json
    curl -L https://storage.googleapis.com/deployent_keys/N2M4YmY2NjYzZWMzYzczNWVkNzY3MDM3ODliZDBmYTA3NTViN2NlODkyNGE5Yzli/humaniq-deployment-manager.json > /tmp/gcloud/gcloud-auth.json
}

google_auth() {
    check_gcloud_email
    check_gcloud_zone

    gcloud_install
    # Activat Service Account
    gcloud auth activate-service-account $GCLOUD_EMAIL --key-file /tmp/gcloud/gcloud-auth.json

    echo "-= Prepare kubectl config =-"
    gcloud container clusters get-credentials $DEPLOY_TO --zone $GOOGLE_ZONE --project $PROJECT
}

build() {
    echo "-= Build stage =-"
    check_docker_image_name
    check_APP_VERSION

    echo ">>>>> BUILD IMAGE: ${DOCKER_BUILD_PATH}/${IMAGE_NAME}:${APP_VERSION}"
    sudo docker build --rm -t ${DOCKER_BUILD_PATH}/${IMAGE_NAME}:${APP_VERSION} .
}

release() {
    echo "-= RELEASE stage =-"
    check_APP_VERSION
    check_service_name

    google_auth
    build && push
}

push() {
    echo "-= Push stage =-"
    check_docker_image_name

    echo ">>>>> Push image: ${DOCKER_BUILD_PATH}/${IMAGE_NAME}:${APP_VERSION}"

    sudo docker push ${DOCKER_BUILD_PATH}/${IMAGE_NAME}:${APP_VERSION}
}

install_helm() {
    echo "-= Install Helm tools =-"
    local install_helm_path="/tmp/get_helm.sh"
    rm -rf $install_helm_path
    curl https://raw.githubusercontent.com/kubernetes/helm/master/scripts/get > $install_helm_path
    chmod 700 $install_helm_path
    . $install_helm_path

    helm init -c
    check_helm_namespace

    echo "-= Check helm is working =-"
    helm version
}

deploy() {
    echo "-= Deploy stage =-"
    check_service_name

    google_auth
    build && push && install_helm && do_helm
}

do_helm() {
    check_service_name
    echo "-= Deploy dry-run =-"
    helm upgrade --install $SERVICE_NAME $CHART_PATH --wait --set image.tag=$APP_VERSION -f $CHART_PATH/$OVERRIDE_VALUES --namespace $KUBE_NAMESPACE --dry-run
    echo "-= Deploy =-"
    helm upgrade --install $SERVICE_NAME $CHART_PATH --wait --set image.tag=$APP_VERSION -f $CHART_PATH/$OVERRIDE_VALUES --namespace $KUBE_NAMESPACE
#    helm status $SERVICE_NAME
}

case $* in
    google_auth)
        google_auth
        ;;
    build)
        build
        ;;
    push)
        push
        ;;
    deploy)
        deploy
        ;;
    release)
        release
        ;;
    install_helm)
        install_helm
        ;;
esac