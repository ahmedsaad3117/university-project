const express = require("express");
const { graphqlHTTP } = require("express-graphql");

const app = express();

app.use(graphqlHTTP({schema,rootValue}))

const PORT = 3000;

app.listen(PORT, () => console.log("Server is running on port " + PORT));
