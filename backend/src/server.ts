import { ApolloServer } from "apollo-server";
import typeDefs from "./schema";
import authResolver from "./resolvers/authResolvers";
import playerResolver from "./resolvers/playerResolver";

const server = new ApolloServer({
  typeDefs,
  resolvers: [authResolver, playerResolver],
  context: ({ req }) => {
    const token = req.headers.authorization || "";
    return { token };
  },
});

server.listen({ port: 4000 }).then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
