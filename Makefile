.PHONY: base build push pull_base push_base
.default: build
IMAGE_NAME ?= "buttercms-blog"
DOCKER_BUILD_PATH ?= "eu.gcr.io/humaniq-168420"
GIT_SHA=`git rev-parse --verify HEAD | head -n 1 | cut -c1-6`
DOCKER_IMAGE_BASE ?= "${DOCKER_BUILD_PATH}/$(IMAGE_NAME):base"
DOCKER_IMAGE_SHA ?= "${DOCKER_BUILD_PATH}/$(IMAGE_NAME):${GIT_SHA}"

base:
	@docker build --rm -t ${DOCKER_IMAGE_BASE} -f Dockerfile.base .

pull_base:
	@gcloud docker -- pull ${DOCKER_IMAGE_BASE}

push_base:
	@gcloud docker -- push ${DOCKER_BUILD_PATH}/$(IMAGE_NAME):base

build:
	@docker build --rm -t ${DOCKER_IMAGE_SHA} .

deploy: pull_base build
	@echo "--- Begin deploy image: ${DOCKER_IMAGE_SHA}"
	@gcloud docker -- push ${DOCKER_IMAGE_SHA}
	@echo "--- Deployed image: ${DOCKER_IMAGE_SHA}"
