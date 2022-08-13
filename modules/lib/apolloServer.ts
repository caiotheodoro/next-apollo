import { ApolloServer } from "apollo-server-micro";
import { schema } from "../graphql/schema";
import { prisma } from "./prisma";

const server = new ApolloServer({
  schema,
  context: ({ req }) => ({ req, prisma }),
});

export { server };
