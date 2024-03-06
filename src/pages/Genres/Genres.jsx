import React from 'react';
import { Bookcase } from '../../components';
import { genres } from '../../utils';

function Genre() {
    return (
        <Bookcase shelves={genres} grouping='genres' />
    );
}

export default Genre;