---
title: GraphQL Schema
---

A brief look at how the data is modeled in this app.

## Entities

### Book
Field | Type
--- | ---
id | GraphQLID
name | GraphQLString
genre | GraphQLString
author | Author
### Author
Field | Type
--- | ---
id | GraphQLID
name | GraphQLString
age | GraphQLString
books | GraphQLList(Book)

You can find the schema declaration [here](https://github.com/chmiiller/graphing/blob/main/server/schema/schema.js). This is an example on how it looks like:
```js
const BookType = new GraphQLObjectType({
    name: 'Book',
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        genre: { type: GraphQLString },
        author: {
            type: AuthorType,
            resolve(parent, args) {
                // MongoDB query
            }
        },
    }),
});
```

You probably wondering why `fields` is defined as a function instead of a simple object. This is because when we declare a schema that depends on another entity - in this case a book needs an author - if we set the field `author` with a `AuthorType` as its type and this schema declaration comes before the Author declaration, AuthorType will be `undefined` at this moment. When we pass a function instead, this is only called on execution time, when both entities are already declared.

For more information on how to set up a GraphQL schema and what are the GraphQL types, check their [official docs](https://graphql.org/learn/schema/)
