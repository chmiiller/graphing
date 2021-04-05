---
title: Middleware
---

A very important piece on this server is the [GraphQL HTTP](https://github.com/graphql/express-graphql) server middleware that would provide graphql access to the express server.

## Adding it

Simply use it with express like this:
```js
app.use("/graphql", graphqlHTTP({
    schema,
    graphiql: true
}));
```
We're leaving `graphiql: true` so we can run and check queries with a nice and simple GUI on the browser.   

![graphiql overview](/img/graphiql.png)