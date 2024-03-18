import React, { useState } from 'react';
import { Header, Navbar, Aside, Footer, Preview } from './components';
import { Pages } from './pages';
import { useName, useToken, getData, drag, allowDrop, removeFromStack, preview } from './utils';

function App() {
  const { name, setName } = useName();
  const { token, setToken } = useToken();
  const [books, setBooks] = useState([]);

  getData('books').then(books => { setBooks(books); });

  document.addEventListener('dragstart', drag);
  document.addEventListener('dblclick', preview);

  return (
    <>
      <Header />
      <Navbar name={name} setName={setName} setToken={setToken} />
      <div id='body' onDragOver={allowDrop}>
        <main onDrop={removeFromStack}>
          <Pages name={name} setName={setName} token={token} setToken={setToken} books={books} />
        </main>
        <Aside />
      </div>
      <Footer />
      <Preview />
    </>
  );
}

export default App;
