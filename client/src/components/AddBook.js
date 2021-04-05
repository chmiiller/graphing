import React, { useState, } from 'react';
import { useMutation, useQuery } from '@apollo/client';

import {
    addBookMutation,
    getAuthorsQuery,
    getBooksQuery
} from '../api/queries';

function AddBook() {
    const { loading, data } = useQuery(getAuthorsQuery);
    const [addBook] = useMutation(addBookMutation);
    const [name, setName] = useState('');
    const [genre, setGenre] = useState('');
    const [authorId, setAuthorId] = useState('');
    const [defaultAuthor, setDefaultAuthor] = useState('Select Author');
    
    const displayAuthors = () => {
        if (data && data.authors) {
            return data.authors.map(author => (
                <option key={`author_${author.id}`} value={author.id} name={author.name} >
                    {author.name}
                </option>
            ));
        }
    }

    const submitForm = (e) => {
        e.preventDefault();
        addBook({
            variables: {
                name,
                genre,
                authorId
            },
            refetchQueries: [{ query: getBooksQuery }],
        });
        setName('');
        setGenre('');
        setAuthorId('');
        setDefaultAuthor('');
    }

    return (
        <div id="main">
            { loading &&
                <div>
                    Loading Authors
                </div>
            }

            <form id="add-book" onSubmit={submitForm}>
            <div className="field">
                <label>Book name: </label>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => {
                        setName(e.target.value);
                    }}
                />
            </div>
            
            <div className="field">
                <label>Genre: </label>
                <input
                    type="text"
                    value={genre}
                    onChange={(e) => {
                        setGenre(e.target.value);
                    }}
                />
            </div>
            
            <div className="field">
                <label>Author: </label>
                <select
                    value={defaultAuthor}
                    onChange={(e) => {
                        setAuthorId(e.target.value);
                        setDefaultAuthor(e.target.value);
                    }}
                >
                    <option>Select author</option>
                    {displayAuthors()}
                </select>
            </div>

            <button>+</button>
        </form>
        </div>
        
    );
}

export default AddBook;
