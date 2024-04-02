import React, { useState, useEffect } from 'react';
import { Header, Navbar, Aside, Footer, Preview } from './components';
import { Pages } from './pages';
import { useName, useToken, getPublic, drag, allowDrop, removeFromStack, preview } from './utils';

function App() {
  const { name, setName } = useName();
  const { token, setToken } = useToken();
  const [books, setBooks] = useState([]);

  useEffect(() => {
    getPublic("api/books")
    .then(books => { console.log("Number of books:", Object.keys(books).length); setBooks(books); })
    .catch(error => console.log(error));

    window.addEventListener('dragstart', drag);
    window.addEventListener('dblclick', preview);

    return () => {
    // Clean up listeners on unmount
      window.removeEventListener('dragstart', drag);
      window.removeEventListener('dblclick', preview);
    };
  }, []);

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
