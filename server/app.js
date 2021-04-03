const express = require('express');
const mongoose = require('mongoose');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema/schema');

const app = express();

mongoose.connect();
mongoose.connection.once('open', () => {
    console.log(` >>>>>>>>>>>>>>>>>>>>>>>>>>>>> connected to mongoose`);
});
// graphQL middleware
app.use("/graphql", graphqlHTTP({
    schema,
    graphiql: true
}));

app.listen(4000, () => {
    console.log(` >>>>>>>>>>>>>>>>>>>>>>>>>>>>> now listening for requests on port 4000`);
});