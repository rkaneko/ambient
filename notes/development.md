Developer notes
===

# GraphQL

In this project, we uses `apollo-codegen` for the following purposes.

- Get a schema of GraphQL APIs
- Generates types of GraphQL operations's result

And for using GraphQL files in JavaScript, some JavaScript codes are automatically generated from GraphQL files.

## Usage

```bash
# Get a GitHub GraphQL API schema
$ GH_TOKEN=${HERE_YOUR_GH_ACCESS_TOKEN} ./bin/get_gh_schema.sh

# Concatenate GraphQL files for using fragments
# See also https://github.com/apollographql/apollo-codegen/issues/59
$ ./bin/concatenate_gql_files.sh

# Generate operations's result types for flowtype
$ ./bin/generate_gql_operations_result_type.sh

# Generate JavaScript codes for using GraphQL
$ ./bin/generate_gql_js_files.sh
```

