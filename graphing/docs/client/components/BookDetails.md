---
title: BookDetails
---

#### [Source code](https://github.com/chmiiller/graphing/blob/main/client/src/components/BookDetails.js)
A basic component that receives `bookId` as a property and with the `getOneBookQuery` queries and displays its details.

![project overview](/img/bookdetails.png)   

The trick about this component is that we have to get its properties before wrapping it with the `graphql` HOC. Once we get its `bookId` we can proper query for it and return a complete book object as a `data` param to the react component. This is how this looks like:   


```js
export default graphql(getOneBookQuery, {
    options: (props) => {
        return {
            variables: {
                id: props.bookId
            }
        }
    }
})(BookDetails);
```

Unfortunately I didn't find yet a nicer way to do this using the `useQuery` hook. I'm sure this is possible, so it will be included as a To Do item for the next version.