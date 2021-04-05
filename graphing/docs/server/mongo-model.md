---
title: Mongo Models
---

A brief look at how the data is modeled in this app.

## Entities

### Book
Field | Type
--- | ---
name | String
genre | String
authorId | String
### Author
Field | Type
--- | ---
name | String
age | Number

You can find these models [here](https://github.com/chmiiller/graphing/tree/main/server/models). This is an example on how it looks like:
```js
const Schema = mongoose.Schema;
const bookSchema = new Schema({
    name: String,
    genre: String,
    authorId: String
});
```

For more information on how to set up models with MongoDB check their [official docs](https://docs.mongodb.com/manual/core/data-modeling-introduction/)
