/* Template file to define a new Apollo GraphQL mutation */
const gql = require('graphql-tag');

const typeDef = gql`
  extend type Mutation {
    resolverName: ReturnType
  }

  type ReturnType {
    field: String
  }
`;

const resolvers = {
  Query: {
    async resolverName() {
      return { field: 'test' };
    },
  },
};

module.exports = { typeDef, resolvers };
