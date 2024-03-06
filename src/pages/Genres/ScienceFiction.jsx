import React from 'react';
import { Bookcase } from '../../components';
import { genres } from '../../utils';

function ScienceFiction({ props }) {
  const authors = {
    'asimov': {
      'name': 'Isaac Asimov',
      'books': genres.scifi.books
    }
  };

  return (
    <Bookcase shelves={authors} grouping='authors' />
  );
}

export default ScienceFiction;