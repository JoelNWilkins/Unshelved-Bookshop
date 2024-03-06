import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  /*
  function showAside() {
    document.getElementById("aside").style.display = "flex";
    document.getElementById("main").style.width = "calc(100vw - 350px)";
  }

  function hideAside() {
    document.getElementById("aside").style.display = "none";
    document.getElementById("main").style.width = "100vw";
  }
  */

  function toggleAside() {
    let aside = document.getElementById("aside");
    let main = document.getElementsByTagName("main")[0];
    if (aside.style.display !== "flex") {
      aside.style.display = "flex";
      main.style.width = "calc(100vw - 475px)";
    } else {
      aside.style.display = "none";
      main.style.width = "100vw";
    }
  }

  return (
    <nav>
      <Link to={'/'}>Home</Link>
      <Link to={'/'}>About</Link>
      <Link to={'/'}>Contact Us</Link>
      <button onClick={toggleAside}>My Stack</button>
      <Link to={'/'} id='signin'>Sign In</Link>
    </nav>
  );
}

export default Navbar;
