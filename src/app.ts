import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import { ApolloServerPluginDrainHttpServer } from "@apollo/server/plugin/drainHttpServer";
import express from "express";
import http from "http";
import cors from "cors";
import typeDefs from "./graphql/typedefs/typeDefs";
import { resolvers } from "./graphql/resolvers/resolvers";
import connectToDatabase from "./db/db";

async function startApolloServer() {
  // mongo connection
  await connectToDatabase();

  // express server
  const app = express();
  // app.use(express.json());
  const httpServer = http.createServer(app);

  // apollo server
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
  });

  await server.start();
  app.use("/", cors(), express.json(), expressMiddleware(server));

  await new Promise<void>((resolve) =>
    httpServer.listen({ port: 4000 }, resolve),
  );

  console.log(`🚀 Server ready at http://localhost:4000/`);
}

startApolloServer();
