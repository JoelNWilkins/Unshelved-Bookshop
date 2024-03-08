import React, { useEffect } from 'react';
import { useComponentWidth } from '..';
import { Plaque } from '..';

const Shelf = ({ children, id, name, grouping, dimensions }) => {
  useEffect(() => {
    const shelf = document.getElementById(id);
    const books = shelf.children;
    const n = books.length;
    const width = shelf.offsetWidth;
    const midpoint = width * 0.6;
    let position = 0;
    let bookWidth = 0;

    // Loop through the books from left to right
    // Start from j = 2 to skip the Plaque and the shelf div
    for (let j = 2; j < n; j++) {
      // Set the position from the left wall of the shelf
      books[j].style.left = position+'px';
      bookWidth = books[j].offsetWidth;
      position = Math.trunc(position + bookWidth);

      if (position > width) {
        books[j].classList.add('hide');
      }

      // Update the z-index value to make sure the books don't render over each other
      // Check if the books are angled to the right
      if (position > midpoint) {
        // Decrease the z-index so that each book from the midpoint
        // onwards renders above the book to its right
        books[j].style.zIndex = n-j;
      } else {
        // Unset the z-index of the books on the left side
        books[j].style.zIndex = null;
      }
    }
  }, [id]);

  const handleWidthChange = ({ newWidth }) => {
    const shelf = document.getElementById(id);
    const books = shelf.children;
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
    // Start from j = 2 to skip the Plaque and the shelf div
    for (let j = 2; j < n; j++) {
      position = parseInt(books[j].style.left.replace('px', ''));
      if (position <= prev) {
        position = Math.trunc(prev + bookWidth);
        books[j].style.left = position+'px';
      }
      books[j].classList.remove('hide');
      bookWidth = books[j].offsetWidth;

      if (position + bookWidth > width) {
        books[j].classList.add('hide');
      }

      // Update the z-index value to make sure the books don't render over each other
      // Check if the books are angled to the right
      if (position + bookWidth > midpoint) {
        // Decrease the z-index so that each book from the midpoint
        // onwards renders above the book to its right
        books[j].style.zIndex = n-j;
      } else {
        // Unset the z-index of the books on the left side
        books[j].style.zIndex = null;
      }

      prev = position;
    }
  }

  const { ref } = useComponentWidth(handleWidthChange);

  let style = {};
  style['--height'] = (dimensions?.height * 2)+'px';
  style['--depth'] = (dimensions?.depth * 2)+'px';

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