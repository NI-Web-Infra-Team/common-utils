#!/bin/sh

set -e

yarn --frozen-lockfile

yarn build

npm publish --registry=https://registry.npmjs.com/

echo "✅ Publish completed"
