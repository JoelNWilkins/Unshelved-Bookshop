import React, { useEffect } from 'react';
import { Plaque } from '../';
import './_shelf.scss';

const Shelf = ({ children, id, name, grouping }) => {
  useEffect(() => {
    // Executed when the component is loaded
    let shelf = document.getElementById(id);
    let books = shelf.children;
    let position = 0;
    //console.log(i, books);
    for (let j=2; j < books.length; j++) {
      books[j].style.left = position+'px';
      position += books[j].offsetWidth;
      position = Math.trunc(position);
    }
  });

  return (
    <section id={id}>
      <Plaque id={id} name={name} to={`/${grouping}/${id}`} />
      <div className='shelf'>
        <div className='wall top' />
        <div className='wall bottom' />
        <div className='wall left' />
        <div className='wall right' />
      </div>
      {children}
    </section>
  );
}

Shelf.defaultProps = {
  grouping: 'genre'
}

export default Shelf;