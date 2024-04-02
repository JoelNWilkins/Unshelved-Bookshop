import React from 'react';
import { Book, Shelf } from '../';

function Bookcase({ books, shelves, droppable }) {
  return (
    <>
      { shelves != null && Object.entries(shelves).reverse().map(([path, shelf]) => (
        shelf &&
        <Shelf key={path} id={shelf?.id} name={shelf?.name} path={path}
          dimensions={shelf?.dimensions} dropabble={droppable}
        >
          { shelf?.books && shelf?.books.map((isbn) => (
            <Book key={isbn} details={books[isbn]} />
          ))}
        </Shelf>
      ))}
    </>
  );
}

Bookcase.defaultProps = {
  droppable: false
}

export default Bookcase;