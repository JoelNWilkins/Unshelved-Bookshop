import React from 'react';
import { Bookcase } from '../../components';
import { genres } from '../../utils';

function Authors({ props }) {
  let books = {
    'poirot': {
      'name': 'Poirot',
      'books': genres.crime.books
    }
  }

  return (
    <Bookcase shelves={books} grouping='series' />
  );
}

export default Authors;