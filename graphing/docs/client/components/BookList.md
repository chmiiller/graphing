---
title: BookList
---

#### [Source code](https://github.com/chmiiller/graphing/blob/main/client/src/components/BookList.js)
A simple React component with that renders a list of books.

![project overview](/img/booklist.png)   

This component uses the `useQuery` hook from `@apollo/client` to be able to fetch a list of books from our DB with the query `getBooksQuery`.

With the hook we can deconstruct a `loading` and `data` variables. If everything works correctly, we will end up with a list of books in an array and their properties.   
This list has also a [BookDetails](BookDetails) component at the end, so when a book item (`li`) is clicked we set the `selectedBook` state value with its `ID` and pass it to the `BookDetails` component that takes care of rendering it.
