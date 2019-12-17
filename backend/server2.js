const express = require('express');
const express_graphql = require('express-graphql');
var { buildSchema } = require('graphql');
const {ApolloServer, gql, AuthenticationError} = require('apollo-server-express');
const cors = require('cors');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const fs = require('fs');
//const cookieParser = require('cookie-parser')


var schema = buildSchema(`
	type Query {
		locations: Locations
	}
	
	type Loginfo {
		id: Int
		user: String
		password: String
	}
	
	type Locations{
		id: Int
		user: String
		cities: [String]
	}
`);

//Loading user login data (accessed as loginData.loginfo)
var loginData = fs.readFileSync('loginData.json');
var loginData = JSON.parse(loginData);

//Loading location data for each user (accessed as locationData.locData)
var locationData = fs.readFileSync('locationData.json');
var locationData = JSON.parse(locationData);

//Filter locationData for all instances of Locations object containing user
const getLocations = function(args){
	var user = args.user;
	//for testing purposes
	var user = 'dula'
	//for testing purposes
	return locationData.locData.filter(locations => {
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