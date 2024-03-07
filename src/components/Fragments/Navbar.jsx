import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  /*
  function showAside() {
    document.getElementById('aside').style.display = 'flex';
    document.getElementById('main').style.width = 'calc(100vw - 350px)';
  }

  function hideAside() {
    document.getElementById('aside').style.display = 'none';
    document.getElementById('main').style.width = '100vw';
  }
  */

  function toggleAside() {
    let aside = document.getElementById('aside');
    let main = document.getElementsByTagName('main')[0];
    if (aside.style.display !== 'none') {
      aside.style.display = 'none';
      main.style.width = '100vw';
    } else {
      aside.style.display = 'flex';
      main.style.width = 'calc(100vw - 475px)';
    }

    // Need to call the handleWidthChange function for each shelf somehow
  }

  return (
    <nav>
      <Link to='/'>Home</Link>
      <div className='dropdown'>
        <Link to='/genres'>Genres</Link>
        <div class='dropdown_content'>
          <Link to='/genres/crime'>Crime</Link>
          <Link to='/genres/scifi'>Science Fiction</Link>
          <Link to='/genres/fantasy'>Fantasy</Link>
          <Link to='/genres/romance'>Romance</Link>
          <Link to='/genres/classic'>Classics</Link>
        </div>
      </div>
      <div className='dropdown'>
        <button id='authors'>Authors</button>
        <div class='dropdown_content'>
          <Link to='/authors/christie'>Agatha Christie</Link>
          <Link to='/authors/asimov'>Isaac Asimov</Link>
        </div>
      </div>
      <button onClick={toggleAside}>My Stack</button>
      <Link to='/' id='signin'>Sign In</Link>
    </nav>
  );
}

export default Navbar;
