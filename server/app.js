const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema/schema');

const app = express();

// allow cross-origin requests
app.use(cors());

mongoose.connect('');
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