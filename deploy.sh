#!/bin/bash
set -e

export GIT_TAG=`git describe --tags HEAD | head -n 1`
export GIT_SHA="${CI_BUILD_SHA:0:6}"
export DOCKER_BASE_IMAGE="eu.gcr.io/humaniq-168420/site:base"
export IMAGE_NAME=site
export SERVICE_NAME=$IMAGE_NAME

prepare() {
    curl $GOOGLE_DEPLOY_HELPERS > /tmp/deploy_helpers.sh
    source /tmp/deploy_helpers.sh google_auth

    sudo gcloud docker -- pull $DOCKER_BASE_IMAGE
}

deploy() {
    source /tmp/deploy_helpers.sh deploy
}

prepare && deploy
