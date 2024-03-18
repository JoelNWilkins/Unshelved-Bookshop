import React, { useEffect } from 'react';
import { useComponentWidth } from '..';
import { Plaque } from '..';

const Shelf = ({ children, id, name, grouping, dimensions }) => {
  // A function to position the books when the shelf is first created
  useEffect(() => {
    const shelf = document.getElementById(id);
    // Start from index 2 to skip the Plaque and shelf div
    const books = Array.from(shelf.children).slice(2);
    const n = books.length;
    const width = shelf.offsetWidth;
    const midpoint = width * 0.6;
    let position = 0;
    let bookWidth = 0;

    // Loop through the books from left to right
    books.forEach((book, i) => {
      // Set the position from the left wall of the shelf
      book.style.left = position+'px';
      bookWidth = book.offsetWidth;
      position = Math.trunc(position + bookWidth);

      if (position > width) {
        // Hide any books that don't fit on the shelf
        book.classList.add('hide');
      }

      // Update the z-index value to make sure the books don't render over each other
      // Check if the books are angled to the right
      if (position > midpoint) {
        // Decrease the z-index so that each book from the midpoint
        // onwards renders above the book to its right
        book.style.zIndex = n-i;
      } else {
        // Unset the z-index of the books on the left side
        book.style.zIndex = null;
      }

      if (i === n - 1) {
        // Check if there is space for the last book on the right to be leaning
        if (position + 0.26 * book.offsetHeight + 0.966 * book.offsetWidth < width) {
          book.classList.add('leaning');
        }
      }
    });
  }, [id, children]);

  const handleWidthChange = ({ newWidth }) => {
    const shelf = document.getElementById(id);
    // Start from index 2 to skip the Plaque and shelf div
    const books = Array.from(shelf.children).slice(2);
    const n = books.length;
    let width = newWidth
    if (width === undefined) {
      width = shelf.offsetWidth;
    }
    let midpoint = width * 0.6;
    let prev = 0;
    let position = 0;
    let bookWidth = 0;

    // Loop through the books from left to right
    books.forEach((book, i) => {
      position = parseInt(book.style.left.replace('px', ''));
      if (position <= prev) {
        position = Math.trunc(prev + bookWidth);
        book.style.left = position+'px';
      }
      book.classList.remove('hide');
      bookWidth = book.offsetWidth;

      if (position + bookWidth > width) {
        // Hide any books that don't fit on the shelf
        book.classList.add('hide');
      }

      // Update the z-index value to make sure the books don't render over each other
      // Check if the books are angled to the right
      if (position + bookWidth > midpoint) {
        // Decrease the z-index so that each book from the midpoint
        // onwards renders above the book to its right
        book.style.zIndex = n-i;
      } else {
        // Unset the z-index of the books on the left side
        book.style.zIndex = null;
      }

      if (i === n - 1) {
        // Check if there is space for the last book on the right to be leaning
        if (position + 0.26 * book.offsetHeight + 0.966 * book.offsetWidth < width) {
          book.classList.add('leaning');
        } else {
          book.classList.remove('leaning');
        }
      }

      // Update the previous position
      prev = position;
    });
  }

  const { ref } = useComponentWidth(handleWidthChange);

  let style = {
    '--height': (dimensions?.height * 2)+'px',
    '--depth': (dimensions?.depth * 2)+'px'
  };

  return (
    <section id={id} ref={ref} style={style}>
      <Plaque id={id} name={name} to={`/${grouping}/${id}`} />
      <div className='shelf'>
        <div className='top' />
        <div className='bottom' />
        <div className='left' />
        <div className='right' />
      </div>
      {children}
    </section>
  );
}

Shelf.defaultProps = {
  grouping: 'genres',
  dimensions: {height: 225, depth: 150}
}

export default Shelf;