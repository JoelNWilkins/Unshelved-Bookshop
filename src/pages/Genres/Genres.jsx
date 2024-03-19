import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Bookcase } from '../../components';
import { getData } from '../../utils';

function Genre({ books }) {
  const [data, setData] = useState({});
  const location = useLocation();

  useEffect(() => {
    let genre = location.pathname.replace('/genres/', '');
    if (genre[0] === '/') {
      genre = 'all';
    }
    console.log(`Getting data for genre with id ${genre}`);
    getData(`/api/data/genres/${genre}`, null)
      .then(data => {
        let shelves = {};
        if (genre === 'all') {
          shelves = data;
        } else {
          shelves[genre] = data;
        }
        setData(shelves);
      });
  }, [location, setData]);
  
  return (
    <Bookcase books={books} shelves={data} grouping='genres' />
  );
}

export default Genre;