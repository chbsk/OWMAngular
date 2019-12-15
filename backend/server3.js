const express = require('express');
const fs = require('fs');
const { ApolloServer, gql, AuthenticationError } = require('apollo-server-express');
const express = require('express')
const cors = require('cors')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const app = express()
const cookieParser = require('cookie-parser')

app.use(cors())
app.use(express.urlencoded({extended: true}))

//LOADING DATA
//Loading location data for each user (accessed as locationData.locData)
var locationData = fs.readFileSync('locationData.json');
var locationData = JSON.parse(locationData);

//Loading user login data (accessed as loginData.loginfo)
var loginData = fs.readFileSync('loginData.json');
var loginData = JSON.parse(loginData);

var typeDefs = gql`
    type Query {
        locations(user: String): Locations
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
`

const SECRET_KEY = 'secret!'

const app = express()

const corsOptions = {
  origin: 'http://localhost:4200',
  credentials: true
}


app.use(cors(corsOptions))
app.use(cookieParser())

const resolvers = {
    Query: {
      locations: (root, args) => {
        return locationData.locData.filter(locations => locationData.locData.user === user)
      }
    }
}
