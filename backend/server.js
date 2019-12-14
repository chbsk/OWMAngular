var express = require('express');
var express_graphql = require('express-graphql');
var {buildSchema} = require('graphql');

//Schema (the blueprints of our data)
var schema = buildSchema('type Query {message: String }');

var root = {
	message: () => 'Hello World!'
};

// Create and express server and a GraphQL endpoint
var app = express();
app.use('/graphql', express_graphql({
	schema: schema,
	rootValue: root,
	graphiql: true
}));

app.listen(4000, () => console.log('Express GraphQL Server Now Running on localhost:4000/graphql'));