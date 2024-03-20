import React from 'react';
import { Shelf } from '../../components';

function Custom({ books }) {
  return (
    <Shelf id='custom' name='Custom' books={books} grouping='custom' droppable />
  );
}

export default Custom;