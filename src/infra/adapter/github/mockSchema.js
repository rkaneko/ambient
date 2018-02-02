const {addMockFunctionsToSchema} = require('graphql-tools');
const {buildClientSchema} = require('graphql');

const introspectionResult = require('./schema.json');
const mocks = require('./mocks.js');

const mockSchema = buildClientSchema(introspectionResult.data);
addMockFunctionsToSchema({
  'schema': mockSchema,
  mocks,
  'preseveResolvers': false // Set false if overwriting by mock resolvers
});

module.exports = mockSchema;
