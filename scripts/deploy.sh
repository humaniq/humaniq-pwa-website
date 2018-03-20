#!/usr/bin/env bash
set -e

export IMAGE_NAME=pwa-website
export SERVICE_NAME=$IMAGE_NAME
export CHART_PATH=helm
export APP_VERSION=`git describe --tags --always HEAD | head -n 1`

deploy() {
    curl $GOOGLE_DEPLOY_HELPERS > /tmp/deploy_helpers.sh
    source /tmp/deploy_helpers.sh google_auth
    gcloud docker -- pull eu.gcr.io/humaniq-168420/site:base
    source /tmp/deploy_helpers.sh deploy
}

deploy
