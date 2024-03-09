import React from 'react';
import { Header, Navbar, Aside, Footer, Preview } from './components';
import { Pages } from './pages';
import { drag, allowDrop, removeFromStack } from './utils';

function App() {
  document.addEventListener("dragstart", drag);

  return (
    <>
      <Header />
      <Navbar />
      <div id='body' onDragOver={allowDrop}>
        <main onDrop={removeFromStack}>
          <Pages />
        </main>
        <Aside />
      </div>
      <Footer />
      <Preview />
    </>
  );
}

export default App;
