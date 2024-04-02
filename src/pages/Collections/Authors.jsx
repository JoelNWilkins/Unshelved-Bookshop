import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Bookcase } from '../../components';
import { getPublic } from '../../utils';

function Authors({ books }) {
  const [data, setData] = useState({});
  const location = useLocation();

  useEffect(() => {
    let author = location.pathname.replace('/authors/', '');
    console.log(`Getting data for author with id ${author}`);
    getPublic(`data/authors/${author}`)
    .then(data => {
      if (data?.shelves) {
        setData(data?.shelves);
      } else {
        let shelves = {};
        shelves['authors/'+author] = data;
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

export default Authors;