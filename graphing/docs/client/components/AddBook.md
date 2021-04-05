---
title: AddBook
---

#### [Source code](https://github.com/chmiiller/graphing/blob/main/client/src/components/AddBook.js)
A simple form component with three input fields: `Name`, `Genre` and a menu box for selecting an `Author`.

![project overview](/img/addbook.png)   

This component uses both `useMutation` and `useQuery` hooks from `@apollo/client` to be able to add a new book entry (with `addBookMutation`). It needs to implement `useQuery` to be able to call `getAuthorsQuery` for listing all `Authors`.   

Besides all basic form implementation, what is different in this component is the `refetchQueries` on the `addBook` query:
```js
addBook({
    variables: {
        name,
        genre,
        authorId
    },
    refetchQueries: [{ query: getBooksQuery }],
});
```

This works as an update call after the new book is added so our [BookList](BookList) component is re-rendered with the recently added one.
