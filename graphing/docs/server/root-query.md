---
title: Root Query
---

A brief look on how the root query looks like. In case you want to know more about queries within GraphQL you can check [this link](https://graphql.org/learn/schema/#the-query-and-mutation-types)

## Root Query
Field | Type
--- | ---
book | Book
books | GraphQLList(Book)
author | Author
authors | GraphQLList(Author)

### Book
##### type: Book
##### args: ID (GraphQLID)

### Books
##### type: GraphQLList(Book)

### Author
##### type: Author
##### args: ID (GraphQLID)

### Authors
##### type: GraphQLList(Author)

You can find the root query declaration [here](https://github.com/chmiiller/graphing/blob/main/server/schema/schema.js#L48). This is an example on how it looks like:
```js
const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        book: {
            type: BookType,
            args: { id: { type: GraphQLID } },
            resolve(parent, args) {
                // Mongo query
            }
        },
        author: {
            type: AuthorType,
            args: { id: { type: GraphQLID } },
            resolve(parent, args) {
                // Mongo query
            }
        },
        books: {
            type: new GraphQLList(BookType),
            resolve(parent, args){
                // Mongo query
            }
        },
        authors: {
            type: new GraphQLList(AuthorType),
            resolve(parent, args){
                // Mongo query
            }
        },
    },
});
```