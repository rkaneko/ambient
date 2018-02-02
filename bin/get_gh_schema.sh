#!/bin/bash -eux

BASE_DIR=$(dirname $0)
cd ${BASE_DIR}/..

get_gh_schema() {
    local GH_TOKEN="$1"
    if [ -z "${GH_TOKEN}" ]; then
        echo "You must set env GH_TOKEN."
        exit 1
    fi

    $(npm bin)/apollo-codegen introspect-schema https://api.github.com/graphql --header "Authorization: Bearer ${GH_TOKEN}" --output src/infra/adapter/github/schema.json
}

get_gh_schema "${GH_TOKEN}"

exit 0
