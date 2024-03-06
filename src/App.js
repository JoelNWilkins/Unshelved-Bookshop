import React from 'react';
import { Link } from 'react-router-dom';
import { HomePage } from './pages';

function App() {
  const year = new Date().getFullYear();

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
      main.style.width = "calc(100vw - 350px)";
    } else {
      aside.style.display = "none";
      main.style.width = "100vw";
    }
  }

  function allowDrop(event) {
    if (event.target.id === 'aside') {
      event.preventDefault();
    }
  }

  function drop(event) {
    event.preventDefault();
    let data = event.dataTransfer.getData('text');
    let element = document.getElementById(data);
    element.style.left = (5 + (50 * Math.random()))+'px';
    event.target.appendChild(element);
  }

  function scrollResize() {
    let scrollY = window.scrollY;
    let spacer = document.getElementById("spacer");
    if (scrollY < 120) {
      spacer.style.height = (160-scrollY)+"px";
    } else {
      spacer.style.height = "30px";
    }
  }

  document.addEventListener("scroll", scrollResize);

  return (
    <div className='App'>
      <header className='App-header'>
          <h1>Unshelved Bookshop</h1>
      </header>

      <nav>
          <Link to={'/'}>Home</Link>
          <Link to={'/'}>About</Link>
          <Link to={'/'}>Contact Us</Link>
          <button onClick={toggleAside}>My Stack</button>
          <Link to={'/'} id='signin'>Sign In</Link>
      </nav>

      <div id='body'>
        <main>
          <HomePage />
        </main>

        <aside id='aside' onDrop={drop} onDragOver={allowDrop}>
          <div id='spacer'></div>
        </aside>
      </div>

      <footer>
          <p>Copyright &copy; {year}, Joel Wilkins</p>
      </footer>
    </div>
  );
}

export default App;
