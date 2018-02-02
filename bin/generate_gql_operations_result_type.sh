#!/bin/bash -eux

BASE_DIR=$(dirname $0)
cd ${BASE_DIR}/..

PATH_TO_SCHEMA=src/infra/adapter/github/schema.json
PATH_TO_GQL=src/infra/adapter/github/concatenated.graphql
PATH_TO_OPERATIONS_RESULT_TYPE=src/infra/adapter/github/operation-result-types.flow.js
TARGET_TYPE=flow

generate_gql_operations_result_type() {
    local PATH_TO_SCHEMA="$1"
    local PATH_TO_GQL="$2"
    local PATH_TO_OPERATIONS_RESULT_TYPE="$3"
    local TARGET_TYPE="$4"
    if [ ! -f "${PATH_TO_SCHEMA}" ]; then
        echo "GraphQL schema file doesn't exist."
        exit 1
    fi
    if [ ! -f "${PATH_TO_GQL}" ]; then
        echo "GraphQL file doesn't exist."
        exit 1
    fi
    if [ -z "${PATH_TO_OPERATIONS_RESULT_TYPE}" ]; then
        echo "You must specify the operations result type file."
        exit 1
    fi
    if [ -z "${TARGET_TYPE}" ]; then
        echo "You must specify the target type."
        exit 1
    fi

    $(npm bin)/apollo-codegen generate \
        ${PATH_TO_GQL} \
        --schema ${PATH_TO_SCHEMA} \
        --target ${TARGET_TYPE} \
        --output ${PATH_TO_OPERATIONS_RESULT_TYPE}
}

generate_gql_operations_result_type "${PATH_TO_SCHEMA}" "${PATH_TO_GQL}" "${PATH_TO_OPERATIONS_RESULT_TYPE}" "${TARGET_TYPE}"

exit 0
