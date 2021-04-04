import React from 'react';
import { graphql } from '@apollo/client/react/hoc';

import { getOneBookQuery } from '../api/queries';

function BookDetails({ bookId, data }) {
    const displayBookDetails = () => {
        const { book } = data;
        if (book) {
            return (
                <div>
                    <h2>{book.name}</h2>
                    <p>{book.genre}</p>
                    <p>{book.author.name}</p>
                    <p>All books by this author</p>
                    <ul className="other-books">
                        {book.author.books.map((author_book) => {
                            return <li key={author_book.id}>{author_book.name}</li>
                        })}
                    </ul>
                </div>
            );
        }
    }
    return (
        <div id="main">
            <div id="book-details">
                {displayBookDetails()}
            </div>
        </div>
    );
}

export default graphql(getOneBookQuery, {
    options: (props) => {
        return {
            variables: {
                id: props.bookId
            }
        }
    }
})(BookDetails);
