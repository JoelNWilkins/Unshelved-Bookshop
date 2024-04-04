import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Genres, Authors, Custom, Register, SignIn } from './';

function Pages({ name, setName, token, setToken, books }) {
  return (
    <Routes>
      <Route path='/*' element={<Genres books={books} />} />
      <Route path='/genres/*' element={<Genres books={books} />} />
      <Route path='/authors/*' element={<Authors books={books} />} />
      <Route path='/custom/*' element={<Custom books={books} />} />
      <Route path='/register' element={<Register setName={setName} setToken={setToken} />} />
      <Route path='/login' element={<SignIn setName={setName} setToken={setToken} />} />
    </Routes>
  );
}

export default Pages;