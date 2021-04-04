import React, { useState } from 'react';
import { graphql } from '@apollo/client/react/hoc';

import { getBooksQuery } from '../api/queries';
import BookDetails from './BookDetails';

function BookList({ data }) {
    const [selectedBook, setSelectedBook] = useState(null);
    const displayBooks = () => {
        if (data && data.books) {
            return data.books.map(book => {
                return (
                    <li
                        key={`book_${book.id}`}
                        onClick={() => {
                            setSelectedBook(book.id);
                        }}
                    >
                        {book.name}
                    </li>
                );
            });
        }
    };
    return (
        <div id="main">
            {data.loading &&
                <div>
                    Loading books...
                </div>
            }
            <ul id="book-list">
                {displayBooks()}
            </ul>
            <BookDetails bookId={selectedBook} />
        </div>
    );
}

export default graphql(getBooksQuery)(BookList);
