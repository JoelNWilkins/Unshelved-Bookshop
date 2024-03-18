import React from 'react';
import { Book, Shelf } from '../';

function Bookcase({ books, shelves, grouping }) {
  if (shelves) {
    return (
      <>
        { Object.entries(shelves).reverse().map(([genre, shelf]) => (
          <Shelf key={genre} id={genre} name={shelf?.name} grouping={grouping}>
            { shelf?.books && shelf?.books.map((isbn) => (
              <Book key={isbn} details={books[isbn]} />
            ))}
          </Shelf>
        ))}
      </>
    );
  }
}

Bookcase.defaultProps = {
  grouping: 'genres'
}

export default Bookcase;