import React from 'react';
import { Bookcase } from '../../components';
import { genres } from '../../utils';

function Authors({ props }) {
    const author = window.location.pathname.replace('/authors/', '');

    let authors = {
        'asimov': {
            'name': 'Isaac Asimov',
            'books': genres.scifi.books
        },
        'christie': {
            'name': 'Agatha Christie',
            'books': []
        }
    }

    
    if (Object.keys(authors).includes(author)) {
        let books = {}
        books[author] = authors[author]
        return (
            <Bookcase shelves={books} grouping='authors' />
        );
    } else {
        return (
            <>
                <h1>Author not found</h1>
            </>
        )
    }
}

export default Authors;