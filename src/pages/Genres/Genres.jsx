import React, { useState, useEffect } from 'react';
import { Bookcase } from '../../components';
import { getData } from '../../utils';

function Genre() {
  const [books, setBooks] = useState({});

  useEffect(() => {
    getData(`/data/genres/all`, null)
      .then(data => { console.log(data); setBooks(data); });
  }, [setBooks]);
  
  return (
    <Bookcase shelves={books} grouping='genres' />
  );
}

export default Genre;