const express = require('express');
const mongoose = require('mongoose');
const graphqlHTTP = require('express-graphql');
const cors = require('cors');

const schema = require('./schema/schema');

const app = express();

// Allrow CORS  requests
app.use(cors());

mongoose.connect("mongodb://omar:test123@ds115263.mlab.com:15263/gqninja", { useNewUrlParser: true });

mongoose.connection.once('open', () => {
    console.log("Connected!!!")
})

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}));

app.listen(4000, () => {
    console.log("Now listing on port, 4000");
})