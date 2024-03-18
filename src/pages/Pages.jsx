import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Genres, Crime, ScienceFiction, Fantasy, Romance, Classics, Authors, Register, SignIn } from './';

function Pages({ name, setName, token, setToken, books }) {
  return (
    <Routes>
      <Route path='/' element={<Genres />} />
      <Route path='/genres' element={<Genres />} />
      <Route path='/genres/crime' element={<Crime />} />
      <Route path='/genres/scifi' element={<ScienceFiction />} />
      <Route path='/genres/fantasy' element={<Fantasy />} />
      <Route path='/genres/romance' element={<Romance />} />
      <Route path='/genres/classic' element={<Classics />} />

      <Route path='/authors/*' element={<Authors books={books} />} />
      
      <Route path='/register' element={<Register setName={setName} setToken={setToken} />} />
      <Route path='/login' element={<SignIn setName={setName} setToken={setToken} />} />
    </Routes>
  );
}

export default Pages;