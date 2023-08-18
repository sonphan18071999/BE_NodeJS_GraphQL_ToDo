const express = require("express");
const { createHandler } = require("graphql-http/lib/use/express");
const { GraphQLSchema } = require("graphql");
const cors = require("cors");
const { WebSocketServer } = require("ws");
const { useServer } = require("graphql-ws/lib/use/ws");
const {
  RootQueryType,
  RootMutationType,
  RootSubscriptionType,
} = require("../types");
const {ApolloServer} = require("@apollo/server");
const { startStandaloneServer } = require("@apollo/server/standalone");

// Create a express instance
const app = express();

// Create graphql schema object
const schema = new GraphQLSchema({
  query: RootQueryType,
  mutation: RootMutationType,
  subscription: RootSubscriptionType,
});

// Enable Cross-Origin Resource Sharing (CORS)
app.use(cors());

// Serve all methods on /graphql
// where the GraphQL over HTTP express request handler is
// app.all("/graphql", createHandler({ schema }));

// const server = new ApolloServer({
//   schema,
//   RootQueryType,
//   RootMutationType,
//   RootSubscriptionType
// });

//Configure port 
app.get('/api/hello', (req, res) => {
  res.status(200).json({ message: 'Hello from Express on Vercel!' });
});

module.exports = app;



/**
 * This is use to display appollo server
 */

// const { url } =  startStandaloneServer(server, {
//   listen: { port: 4000 }
// });

// console.log(`🚀  Server ready`);

/**
 * Socket
// Start the http server

const server = app.listen(4000);

// Create a websocket server
const wsServer = new WebSocketServer({
  server,
  path: "/graphql",
});

// Start the websocket server
useServer({ schema }, wsServer);
 */

