import React from 'react';
import { Book, Shelf } from '../';

function Bookcase({ shelves, grouping }) {
  return (
    <>
      { Object.entries(shelves).reverse().map(([genre, shelf]) => (
        <Shelf key={genre} id={genre} name={shelf.name} grouping={grouping}>
          { shelf.books.map((details) => (
            <Book key={details?.isbn} details={details}/>
          ))}
        </Shelf>
      ))}
    </>
  );
}

Bookcase.defaultProps = {
  grouping: 'genre'
}

export default Bookcase;