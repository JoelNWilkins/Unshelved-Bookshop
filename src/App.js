import React from 'react';
import { Header, Navbar, Aside, Footer, Preview } from './components';
import { Pages } from './pages';
import { useName, useToken, drag, allowDrop, removeFromStack } from './utils';

function App() {
  const { name, setName } = useName();
  const { token, setToken } = useToken();

  document.addEventListener("dragstart", drag);

  return (
    <>
      <Header />
      <Navbar name={name} setName={setName} setToken={setToken} />
      <div id='body' onDragOver={allowDrop}>
        <main onDrop={removeFromStack}>
          <Pages name={name} setName={setName} token={token} setToken={setToken} />
        </main>
        <Aside />
      </div>
      <Footer />
      <Preview />
    </>
  );
}

export default App;
