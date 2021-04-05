import React, { useState } from 'react';
import { useQuery } from '@apollo/client';

import { getBooksQuery } from '../api/queries';
import BookDetails from './BookDetails';

function BookList() {
    const { loading, data } = useQuery(getBooksQuery);
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
            {loading &&
                <div>Loading books...</div>
            }
            <ul id="book-list">
                {displayBooks()}
            </ul>
            <BookDetails bookId={selectedBook} />
        </div>
    );
}

export default BookList;
