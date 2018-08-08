var GraphQLSchema = require('graphql').GraphQLSchema;
var GraphQLObjectType = require('graphql').GraphQLObjectType;
var queryType = require('./queries/ontime').queryType;

exports.ontimeSchema = new GraphQLSchema({
  query: queryType,
})