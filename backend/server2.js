const express = require('express');
const express_graphql = require('express-graphql');
var { buildSchema } = require('graphql');
const {ApolloServer, gql, AuthenticationError} = require('apollo-server-express');
const cors = require('cors');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
//const cookieParser = require('cookie-parser')


var schema = buildSchema('\
	type Query {\
		locations(user: String): Locations\
	}\
	\
	type Loginfo {\
		id: Int\
		user: String\
		password: String\
	}\
	\
	type Locations{\
		id: Int\
		user: String\
		cities: [String]\
	}\
');

var loginData = [
	{
		id: 1,
		user: 'dula',
		password: '123'
	},
	{
		id: 2,
		user: 'saeed',
		password: '567'
	},
];

var locationData = [
	{
		id: 1,
		user: 'dula',
		cities: ['Calgary, Dubai']
	},
	{
		id: 2,
		user: 'saeed',
		cities: ['Toronto', 'Abu Dhabi']
	},
]

//Filter locationData for all instances of Locations object containing user
const getLocations = function(args){
	var user = args.user;
	return locationData.filter(locations => {
		return locations.user === user;
	})[0];
}

//root resolver
var root = {
	locations: getLocations
};

// Create and express server and a GraphQL endpoint
var app = express();
app.use('/graphql', express_graphql({
    schema: schema,
    rootValue: root,
    graphiql: true
}));

app.listen(4000, () => console.log('Express GraphQL Server Now Running on localhost:4000/graphql'));