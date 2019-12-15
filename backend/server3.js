const { ApolloServer } = require('apollo-server');
const fs = require('fs');
const { ApolloServer, gql, AuthenticationError } = require('apollo-server-express');

//LOADING DATA
//Loading location data for each user (accessed as locationData.locData)
var locationData = fs.readFileSync('locationData.json');
var locationData = JSON.parse(locationData);

//Setting up server
const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: ({ req }) => {
        
        //get user token from the headers
        const token = req.headers.authorization || '';

        //try to retrieve the user with this token
        const user = getUser(token);

        //if token invalid (no user belongs to it)
        if(!user) throw new AuthenticationError('Authorization Failed');

        //add user to context
        return { user };
    },
});

//resolvers
users: (parent, args, context) => {
    //throw emptiness back if not valid
    if(!context.user) return null;

    return locationData.locData.filter(locations => {
		return locations.user === user;
	})[0];
}

server.listen().then(({ url }) => {
    console.log('Server ready at ${url}')
});
