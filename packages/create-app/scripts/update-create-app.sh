#!/bin/bash

echo "Updating Create-app..."
cd scripts
ts-node test-create-app.ts || exit 1
echo "Installing updated workspaces..."
cd ../../..
yarn install || exit 1
cd packages/create-app
echo "Building..."
yarn build:app || exit 1
echo "Login..."
npm login || exit 1
echo "Publishing..."
npm publish || exit 1
git checkout package.json
echo "Installing new app outside CCF repo..."
cd ../../..
npx @cloud-carbon-footprint/create-app-dev || exit 1
echo "Starting app..."
cd ccf-app
yarn launch-with-ibm-cloud-data || exit 1
