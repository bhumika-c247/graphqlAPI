const { ApolloServer, gql } = require('apollo-server');
const connectDB = require('./config/db');
const typeDefs = require('./types');
const resolvers = require('./resolvers');
const models = require('./models');
const mongoose = require('mongoose');
const { ObjectID } = require('mongodb');
const knex = require('knex')({
  client: 'pg',
  connection: {
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '',
    database: 'db',
  },
});
// console.log('knex-----', knex);
mongoose.connect(
  process.env.DATABASE_URL,
  { useUnifiedTopology: true, useNewUrlParser: true },
  (err) => {
    if (err) {
      console.error('Connection to DB failed');
    } else {
      console.log('Connection to DB was successful');
    }
  }
);

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: { models },
});
// connectDB();
// port: process.env.PORT yet undefined but we will have this variable
// once we deployed to heroku
server.listen({ port: process.env.PORT || 4000 }).then(({ url }) => {
  console.log(`Server is ready at ${url}`);
});
