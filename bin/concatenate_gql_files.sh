#!/bin/bash -eux

BASE_DIR=$(dirname $0)
cd ${BASE_DIR}/..

PATH_TO_CONCATENAMTED=src/infra/adapter/github/concatenated.graphql

concatenate_ghq_files() {
    local PATH_TO_CONCATENAMTED="$1"
    if [ -z "${PATH_TO_CONCATENAMTED}" ]; then
        echo "You must specify PATH_TO_CONCATENAMTED."
        exit 1
    fi

    clean_concatenated "${PATH_TO_CONCATENAMTED}"

    local GQL_FILES=`find_gql_files`
    for GQL_FILE in ${GQL_FILES[@]}
    do
        cat ${GQL_FILE} >>${PATH_TO_CONCATENAMTED}
    done

    echo "Concatenated to ${PATH_TO_CONCATENAMTED}."
}

find_gql_files() {
    find src/infra/adapter/github/graphql -type f -name "*.graphql"
}

clean_concatenated() {
    local PATH_TO_CONCATENAMTED="$1"
    if [ -f "${PATH_TO_CONCATENAMTED}" ]; then
        rm -f ${PATH_TO_CONCATENAMTED}
        echo "Cleaned ${PATH_TO_CONCATENAMTED}."
    fi
}

concatenate_ghq_files "${PATH_TO_CONCATENAMTED}"

exit 0
