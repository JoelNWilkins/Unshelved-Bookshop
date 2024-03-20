import React from 'react';
import { Book, Shelf } from '../';

function Bookcase({ books, shelves, grouping, droppable }) {
  if (shelves) {
    return (
      <>
        { Object.entries(shelves).reverse().map(([genre, shelf]) => (
          <Shelf key={genre} id={genre} name={shelf?.name} grouping={grouping} dropabble={droppable}>
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
  grouping: 'genres',
  droppable: false
}

export default Bookcase;