import React from 'react';
import { Link } from 'react-router-dom';
import { Screw } from '../';

function Plaque({ id, name, to }) {
  return (
    <label className='plaque' htmlFor={id}>
      <Link className='plaque_link' to={'/'+to}>
        <Screw />{name}<Screw />
      </Link>
    </label>
  );
}

export default Plaque;