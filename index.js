const express = require("express");
const { createHandler } = require("graphql-http/lib/use/express");
const { GraphQLSchema } = require("graphql");
const cors = require("cors");
const {
  RootQueryType,
  RootMutationType,
  RootSubscriptionType,
} = require("./types");
const { graphqlHTTP } = require("express-graphql")

// Create a express instance
const app = express();

// Enable Cross-Origin Resource Sharing (CORS)
app.use(cors());

const port = process.env.PORT || 4200

// Create graphql schema object
const schema = new GraphQLSchema({
  query: RootQueryType,
  mutation: RootMutationType,
  subscription: RootSubscriptionType,
});

// app.all("/graphql", createHandler({ schema }));

var root = {
  hello: () => {
    return "Hello world!"
  }
}

app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true
  })
)

app.listen(port);

console.log(`Running a GraphQL API server at ${port}`)


