import React from 'react';
import { Header, Navbar, Aside, Footer, Preview } from './components';
import { Pages } from './pages';

function App() {
  return (
    <>
      <Header />
      <Navbar />
      <div id='body'>
        <main>
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
