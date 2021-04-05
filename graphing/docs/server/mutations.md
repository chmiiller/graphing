---
title: Mutations
---

A brief look on how mutations for this project looks like. In case you want to know what mutations are within GraphQL you can check [this link](https://graphql.org/learn/queries/#mutations)

## Mutation declaration
Field | Type
--- | ---
addBook | Book
addAuthor | Author

### addBook
##### type: Book
Argument | Type | Required
--- | --- | ---
name | GraphQLString | true
genre | GraphQLString | true
authorId | GraphQLID | true

### addAuthor
##### type: Author
Argument | Type | Required
--- | --- | ---
name | GraphQLString | true
age | GraphQLInt | true

You can find the mutation declaration [here](https://github.com/chmiiller/graphing/blob/main/server/schema/schema.js#L81). This is an example on how it looks like:
```js
const Mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        addAuthor: {
            type: AuthorType,
            args: { 
                name: { type: new GraphQLNonNull(GraphQLString) },
                age: { type: new GraphQLNonNull(GraphQLInt) },
            },
            resolve(parent, args) {
                const author = new Author({
                    name: args.name,
                    age: args.age,
                });
                // Mongo DB save
            }
        },
        addBook: {
            type: BookType,
            args: {
                name: { type: new GraphQLNonNull(GraphQLString) },
                genre: { type: new GraphQLNonNull(GraphQLString) },
                authorId: { type: new GraphQLNonNull(GraphQLID) },
            },
            resolve(parent, args) {
                const book = new Book({
                    name: args.name,
                    genre: args.genre,
                    authorId: args.authorId
                });
                // Mongo DB save
            }
        },
    },
});
```