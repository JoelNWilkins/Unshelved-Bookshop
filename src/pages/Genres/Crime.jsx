import React from 'react';
import { Bookcase } from '../../components';
import { genres } from '../../utils';

function Crime({ props }) {
  const authors = {
    'christie': {
      'name': 'Agatha Christie',
      'books': genres.crime.books
    }
  };

  return (
    <Bookcase shelves={authors} grouping='authors' />
  );
}

export default Crime;