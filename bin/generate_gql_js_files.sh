#!/bin/bash -eu

BASE_DIR=$(dirname $0)
cd ${BASE_DIR}/..

PATH_TO_GQL_DIR=src/infra/adapter/github/graphql

generate_gql_js_files() {
    local PATH_TO_GQL_DIR="$1"
    if [ ! -d "${PATH_TO_GQL_DIR}" ]; then
        echo "You must specify GraphQL files root directory."
        exit 1
    fi

    local GQL_FILES=$(find_gql_files "${PATH_TO_GQL_DIR}")
    for GQL_FILE in ${GQL_FILES[@]}
    do
        local DIRNAME=`directoryname "${GQL_FILE}"`
        local FILENAME=`filename "${GQL_FILE}"`
        local GQL=$(cat ${GQL_FILE})
        cat >"${DIRNAME}/${FILENAME}.js"<< __EOT__
/* eslint-disable */
// This file was automatically generated and should not be edited.
// See ${GQL_FILE}.
module.exports = \`
${GQL}
\`;

__EOT__
    done
}

find_gql_files() {
    local PATH_TO_GQL_DIR="$1"
    if [ ! -d "${PATH_TO_GQL_DIR}" ]; then
        echo "You must specify GraphQL files root directory."
        exit 1
    fi

    find ${PATH_TO_GQL_DIR} -type f -name "*.graphql"
}

directoryname() {
    local PATH_TO_FILE="$1"
    if [ ! -f "${PATH_TO_FILE}" ]; then
        echo "You must specify path to file."
        exit 1
    fi

    local DIRNAME=$(dirname "${PATH_TO_FILE}")
    echo "${DIRNAME}"
}

filename() {
    local FILE_NAME_LIKE="$1"
    if [ -z "${FILE_NAME_LIKE}" ]; then
        echo "You must specify file name or path to file."
        exit 1
    fi

    local BASENAME=$(basename "${FILE_NAME_LIKE}")
    local FILENAME="${BASENAME%.*}"
    echo "${FILENAME}"
}

generate_gql_js_files "${PATH_TO_GQL_DIR}"

exit 0
