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
    const getGenre = async () => {
      try {
        const response = await getPublic('data', `genres/${genre}`);
        console.log(`Getting data for genre with id ${genre}`);
        console.log(response?.data);
        if (response?.data.shelves) {
          setData(response?.data.shelves);
        } else {
          let shelves = {};
          shelves['genres/'+genre] = response.data;
          setData(shelves);
        }
      } catch (err) {
        console.log(`Error getting genre ${genre}: ${err}`)
      }
    };
    getGenre();

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