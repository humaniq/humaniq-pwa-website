#!/bin/bash
set -e

curl -L ${GOOGLE_AUTH_URL} > /tmp/googleauth
source /tmp/googleauth

make deploy
