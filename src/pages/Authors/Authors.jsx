import React, { useState, useEffect } from 'react';
import { Bookcase } from '../../components';
import { getData } from '../../utils';

function Authors({ books }) {
  const author = window.location.pathname.replace('/authors/', '');
  const [data, setData] = useState({});

  useEffect(() => {
    getData(`/data/authors/${author}`, null)
      .then(data => { console.log(data); setData({data}); });
  }, [author, setData]);
  
  if (author) {
    return (
      <Bookcase books={books} shelves={data} grouping='authors' />
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