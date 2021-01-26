const { ApolloServer, gql } = require('apollo-server-lambda')
const fetch =require( 'cross-fetch');
const faunadb = require("faunadb");

const q = faunadb.query;
const shortid = require("shortid");

const typeDefs = gql`
  type Query {
    hello: String
  }
  type Lolly {
    recipientName: String!
    message: String!
    senderName: String!
    flavourTop: String!
    flavourMiddle: String!
    flavourBottom: String!
    lollyPath: String!
  }
  type Mutation {
    createLolly (recipientName: String!, message: String!,senderName: String!, flavourTop: String!,flavourMiddle: String!,flavourBottom: String!) : Lolly
  }
`


const resolvers = {
  Query: {
    hello: () => {
      return 'Hello, Lolly!'
    },
  },
  Mutation: {
    createLolly: async (_, args) => {

 
      
      const client = new faunadb.Client({ secret: "fnAEAfQkujACAUCZh08n41P7nKZHHh8FTvgFuG3r" });
      const id = shortid.generate();
      args.lollyPath = id

      const result = await client.query(
        q.Create(q.Collection("lollies"), {
          data: args
        })
      );
      // Trigger a new build to freeze this lolly forever
      fetch("https://api.netlify.com/build_hooks/6010332f1af1fc60b7117a3e", {
        method: "post"
      })
        .then(function (response) {
          // Report back in the serverless function's logs
          console.log("response1: ",response);
        })
        .catch(function (error) {
          // Describe any errors in the serverless function's logs
          console.log(error);
        });
      

      console.log('result', result.data);
      return result.data
    },
  }
}

const server = new ApolloServer({
  typeDefs,
  resolvers,
})

exports.handler = server.createHandler()