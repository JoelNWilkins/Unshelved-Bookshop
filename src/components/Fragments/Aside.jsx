import React, { useState } from 'react';
import { IconContext } from "react-icons";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { fireEvent } from '@testing-library/react';
import { addToStack } from '../../utils';

function Aside() {
  const [showAside, setShowAside] = useState(true);

  function toggleAside() {
    let aside = document.getElementById('aside');
    let main = document.getElementsByTagName('main')[0];
    if (showAside) {
      //aside.style.display = 'none';
      //aside.style.width = '0';
      main.style.width = '100vw';
    } else {
      //aside.style.display = 'flex';
      //aside.style.width = '500px';
      main.style.width = 'calc(100vw - 500px)';
    }
    setShowAside(prev => !prev);
    //aside.classList.toggle('show');
  
    // Fire a resize event to cause the books on the shelves to rerender
    fireEvent.resize(window);
  }

  function scrollResize() {
    let scrollY = window.scrollY;
    let spacer = document.getElementById("spacer");
    if (scrollY < 120) {
      spacer.style.height = (160-scrollY)+"px";
    } else {
      spacer.style.height = "50px";
    }
  }

  document.addEventListener("scroll", scrollResize);

  return (
    <>
      <aside id='aside' className={ showAside ? 'show' : '' } onDrop={addToStack}>
        <div id='spacer' />
      </aside>
      <div className='toggle_aside_wrapper'>
        <button id='toggle_aside' onClick={toggleAside}>
          <IconContext.Provider value={{}}>
            { showAside ? <FaChevronRight /> : <FaChevronLeft /> }
          </IconContext.Provider>
        </button>
      </div>
    </>
  );
}

export default Aside;
