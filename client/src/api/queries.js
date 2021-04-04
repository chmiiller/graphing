import { gql } from '@apollo/client';

const getAuthorsQuery = gql`
    {
        authors {
            id
            name
        }
    }
`;

const getBooksQuery = gql`
    {
        books {
            id
            name
        }
    }
`;

const getOneBookQuery = gql`
    query($id: ID) {
        book(id: $id) {
            id
            name
            genre
            author {
                id
                name
                age
                books {
                    id
                    name
                }
            }
        }
    }
`;

// Mutations
const addBookMutation = gql`
    mutation AddBook($name: String!, $genre: String!, $authorId: ID!){
        addBook(name: $name, genre: $genre, authorId: $authorId) {
            id
            name
        }
    }
`;

export {
    getOneBookQuery,
    getAuthorsQuery,
    getBooksQuery,
    addBookMutation,
};