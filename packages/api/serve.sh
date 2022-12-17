#!/bin/sh

_PWD=$(realpath .)

nodemon index.ts \
  --watch . \
  --watch `realpath "${_PWD}/../../node_modules/@savitri/api"` \
  --watch `realpath "${_PWD}/../../node_modules/@savitri/common"`
