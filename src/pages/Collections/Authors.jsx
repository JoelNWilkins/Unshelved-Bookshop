import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Bookcase } from '../../components';
import { getPublic } from '../../utils';

function Authors({ books }) {
  const [data, setData] = useState({});
  const location = useLocation();

  useEffect(() => {
    let author = location.pathname.replace('/authors/', '');
    const getAuthor = async () => {
      try {
        const response = await getPublic('data', `authors/${author}`);
        console.log(`Getting data for author with id ${author}`);
        console.log(response?.data);
        if (response?.data.shelves) {
          setData(response?.data.shelves);
        } else {
          let shelves = {};
          shelves['authors/'+author] = response.data;
          setData(shelves);
        }
      } catch (err) {
        console.log(`Error getting author ${author}: ${err}`)
      }
    };
    getAuthor();

    return () => {
      // Cleanup state
      setData({});
    };
  }, [location]);
  
  return (
    <Bookcase books={books} shelves={data} />
  );
}

export default Authors;