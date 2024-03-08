import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Genres, Crime, ScienceFiction, Fantasy, Romance, Classics, Authors, Christie } from './';

function Pages() {
  return (
    <Routes>
      <Route path='/' element={<Genres />} />
      <Route path='/genres' element={<Genres />} />
      <Route path='/genres/crime' element={<Crime />} />
      <Route path='/genres/scifi' element={<ScienceFiction />} />
      <Route path='/genres/fantasy' element={<Fantasy />} />
      <Route path='/genres/romance' element={<Romance />} />
      <Route path='/genres/classic' element={<Classics />} />
      <Route path='/authors/christie' element={<Christie />} />
      <Route path='/authors/asimov' element={<Authors />} />
    </Routes>
  );
}

export default Pages;