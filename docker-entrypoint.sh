#!/bin/bash
set -e

echo "Working directory: $(pwd)"
exec npm run "$@"
