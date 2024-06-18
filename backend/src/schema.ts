import { gql } from "apollo-server";

const typeDefs = gql`
  type Auth {
    token: String
  }

  type Player {
    firstName: String
    secondName: String
    displayName: String
    totalPoints: Int
    team: String
    cCode: String
    trained: String
    threat: String
    assists: String
  }

  type Query {
    players(league: String!): [Player]
  }

  type Mutation {
    login(mobile: String!, password: String!): Auth
  }
`;

export default typeDefs;
