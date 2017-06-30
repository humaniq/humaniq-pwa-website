.PHONY: auth base build push pull_base push_base
.default: build
IMAGE_NAME ?= "buttercms-blog"
DOCKER_BUILD_PATH ?= "eu.gcr.io/humaniq-168420"
GIT_SHA=`git rev-parse --verify HEAD | head -n 1 | cut -c1-6`
DOCKER_IMAGE_BASE ?= "${DOCKER_BUILD_PATH}/$(IMAGE_NAME):base"
DOCKER_IMAGE_SHA ?= "${DOCKER_BUILD_PATH}/$(IMAGE_NAME):${GIT_SHA}"

auth:
	@curl -L ${GOOGLE_AUTH_URL} > /tmp/googleauth
	@. /tmp/googleauth

base:
	@docker build --rm -t ${DOCKER_IMAGE_BASE} -f Dockerfile.base .

pull_base: auth
	@gcloud docker -- pull ${DOCKER_IMAGE_BASE}

push_base: auth
	@gcloud docker -- push ${DOCKER_BUILD_PATH}/$(IMAGE_NAME):base

build:
	@docker build --rm -t ${DOCKER_IMAGE_SHA} .

deploy: pull_base build
	@gcloud docker -- push ${DOCKER_IMAGE_SHA}
