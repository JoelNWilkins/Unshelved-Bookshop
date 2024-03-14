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
    <Bookcase shelves={books} grouping='authors/christie/series' />
  );
}

export default Authors;