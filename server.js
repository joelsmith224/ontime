var express = require("express");
var mongoose = require('./config/mongoose');
var graphqlHTTP = require("express-graphql");
var db = mongoose();
var app = express();

var ontimeSchema = require('./graphql/index').ontimeSchema;
app.use('/graphql', graphqlHTTP({
    schema: ontimeSchema,
    rootValue : global,
    graphiql: true,
}));

app.listen(process.env.PORT || 8080, () => {
    console.log('A GraphQL API running at port 8080');
});