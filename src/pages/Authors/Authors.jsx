import React, { useState, useEffect } from 'react';
import { Bookcase } from '../../components';
import { getData } from '../../utils';

function Authors() {
  const author = window.location.pathname.replace('/authors/', '');
  const [books, setBooks] = useState({});

  useEffect(() => {
    getData(`/data/authors/${author}`, null)
      .then(data => { console.log(data); setBooks({data}); });
  }, [author, setBooks]);
  
  if (author) {
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