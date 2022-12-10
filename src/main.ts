import { ApolloServer } from "apollo-server";
// const { ApolloServer } = require("apollo-server");
// const typeDefs = require('./schema');
import typeDefs from "./schema";
import resolvers from "./resolvers";

const server = new ApolloServer({
    typeDefs: typeDefs,
    resolvers: resolvers,
});

server.listen({ port: process.env.PORT || 4000 }).then(({ url }) => {
    console.log(`
    🚀  Server is ready at ${url}
    📭  Query at https://studio.apollographql.com/dev
  `);
});

// server.listen().then(({ url }) => {
//     console.log(`🚀  Server ready at ${url}`);
// });
