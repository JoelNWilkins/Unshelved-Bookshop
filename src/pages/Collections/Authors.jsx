import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Bookcase } from '../../components';
import { getData } from '../../utils';

function Authors({ books }) {
  const [data, setData] = useState({});
  const location = useLocation();

  useEffect(() => {
    let author = location.pathname.replace('/authors/', '');
    console.log(`Getting data for author with id ${author}`);
    getData(`/api/data/authors/${author}`, null)
      .then(data => {
        if (data?.shelves) {
          setData(data?.shelves);
        } else {
          let shelves = {};
          shelves['authors/'+author] = data;
          setData(shelves);
        }
      });
  }, [location, setData]);
  
  return (
    <Bookcase books={books} shelves={data} />
  );
}

export default Authors;