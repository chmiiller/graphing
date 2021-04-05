---
title: App
---

The app component takes care of importing all basic Apollo modules like `ApolloClient` and `ApolloProvider`.

### ApolloClient

The Apollo Client module is initialized right in the beginning of the file like so:
```js
const client = new ApolloClient({
    uri: 'http://localhost:4000/graphql',
    cache: new InMemoryCache(),
});
```
This is very important since it's our only way to connect to our GraphQL server. If you're testing this locally make sure that your server is authorizing CORS calls.

### ApolloProvider
The Apollo Provider module works as a context API for our entire app and that's why we're wrapping the `App` component with it here:
```js
<ApolloProvider client={client} >
    <div id="main">
        <h1>Reading List</h1>
        <BookList />
        <AddBook />
    </div>
</ApolloProvider>
```
This way we have access to all queries and mutations inside our components. You can find more info about those on their respective docs and how we're using hooks to access them.

