import React from 'react';
import { Link } from 'react-router-dom';
import { GiHamburgerMenu } from "react-icons/gi";
import { SignInOut } from '../';

function Navbar({ name, setName, setToken }) {
  return (
    <nav>
      <div className='hamburger_menu'>
        <div className='hamburger'>
          <GiHamburgerMenu size='20px' />
        </div>
        <div className='hamburger_content'>
          <Link to='/'>Home</Link>
          <div className='dropdown'>
            <Link to='/genres'>Genres</Link>
            <div className='dropdown_content'>
              <Link to='/genres/crime'>Crime</Link>
              <Link to='/genres/scifi'>Science Fiction</Link>
              <Link to='/genres/fantasy'>Fantasy</Link>
              <Link to='/genres/romance'>Romance</Link>
              <Link to='/genres/classic'>Classics</Link>
            </div>
          </div>
          <div className='dropdown'>
            <button id='authors'>Authors</button>
            <div className='dropdown_content'>
              <Link to='/authors/agatha-christie'>Agatha Christie</Link>
              <Link to='/authors/richard-osman'>Richard Osman</Link>
              <Link to='/authors/isaac-asimov'>Isaac Asimov</Link>
              <Link to='/authors/frank-herbert'>Frank Herbert</Link>
              <Link to='/authors/tolkien'>J. R. R. Tolkien</Link>
              <Link to='/authors/jane-austen'>Jane Austen</Link>
            </div>
          </div>
          <Link to='/custom'>My Shelves</Link>
        </div>
      </div>
      <SignInOut name={name} setName={setName} setToken={setToken} />
    </nav>
  );
}

export default Navbar;
