import React, { useState, useEffect } from 'react';
import { Header, Navbar, Aside, Footer, Preview } from './components';
import { Pages } from './pages';
import { useName, useToken, getPublic, drag, allowDrop, removeFromStack, preview } from './utils';

function App() {
  const { name, setName } = useName();
  const { token, setToken } = useToken();
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const getBooks = async () => {
      try {
        const response = await getPublic("books", "");
        console.log("Get books");
        console.log(response?.data);
        setBooks(response?.data || {});
      } catch (err) {
        console.log("Error getting books: "+err)
      }
    };
    getBooks();

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
