import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Bookcase } from '../../components';
import { getPublic } from '../../utils';

function Genre({ books }) {
  const [data, setData] = useState({});
  const location = useLocation();

  useEffect(() => {
    let genre = location.pathname.replace('/genres/', '');
    if (genre[0] === '/') {
      genre = 'default';
    }
    console.log(`Getting data for genre with id ${genre}`);
    getPublic(`data/genres/${genre}`)
    .then(data => {
      console.log(data);
      if (data?.shelves) {
        setData(data?.shelves);
      } else {
        let shelves = {};
        shelves['genres/'+genre] = data;
        setData(shelves);
      }
    })
    .catch(error => console.log(error));

    return () => {
      // Cleanup state
      setData({});
    };
  }, [location]);
  
  return (
    <Bookcase books={books} shelves={data} />
  );
}

export default Genre;