const { buildSchema } = require("graphql");

module.exports = buildSchema(/* GraphQL */ `
  type Query {
    hiDreem: String!
  }

  type Mutation {
    createDreamy(passion: String): String!
  }

  schema {
    query: Query
    mutation: Mutation
  }
`);
