import React from 'react';
import { Link } from 'react-router-dom';
import { Screw } from '../';

function Plaque({ id, name, to }) {
    return (
        <label htmlFor={id}>
            <Link to={to}>
                <Screw />{name}<Screw />
            </Link>
        </label>
    );
}

export default Plaque;