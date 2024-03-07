import React from 'react';
import { useComponentWidth } from '../../components';
import { Plaque } from '../';
import './_shelf.scss';

const Shelf = ({ children, id, name, grouping }) => {
  const handleWidthChange = (newWidth) => {
    const shelf = document.getElementById(id);
    const books = shelf.children;
    const n = books.length;
    const midpoint = newWidth / 2;
    let position = 0;
    let bookWidth = 0;
    let diff = 0;

    // Loop through the books from left to right
    // Start from j = 2 to skip the Plaque and the shelf div
    for (let j = 2; j < n; j++) {
      // Set the position from the left wall of the shelf
      books[j].style.left = position+'px';
      bookWidth = books[j].offsetWidth;
      position = Math.trunc(position + bookWidth);

      // Update the z-index value to make sure the books don't render over each other
      diff = position - midpoint
      // Check if the books are angled to the right
      if (diff >= 0 && diff >= Math.abs(diff - bookWidth)) {
        // Decrease the z-index so that each book from the midpoint
        // onwards renders above the book to its right
        books[j].style.zIndex = n-j;
      } else {
        // Unset the z-index of the books on the left side
        books[j].style.zIndex = null;
      }
    }
  }

  const { ref } = useComponentWidth(handleWidthChange);

  return (
    <section id={id} ref={ref}>
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
  grouping: 'genres'
}

export default Shelf;