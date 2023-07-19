#!/bin/sh

set -e

pnpm i --frozen-lockfile

pnpm run build

npm publish --registry=https://registry.npmjs.com/

echo "✅ Publish completed"
