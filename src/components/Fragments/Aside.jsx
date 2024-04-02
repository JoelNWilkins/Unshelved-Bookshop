import React, { useState, useEffect } from 'react';
import { IconContext } from "react-icons";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { fireEvent } from '@testing-library/react';
import { addToStack } from '../../utils';

function Aside() {
  const [showAside, setShowAside] = useState(true);

  function toggleAside() {
    let main = document.getElementsByTagName('main')[0];
    if (showAside) {
      main.style.width = '100vw';
    } else {
      main.style.width = 'calc(100vw - 500px)';
    }

    // Toggle the value of showAside
    setShowAside(prev => !prev);
  
    // Fire a resize event to cause the books on the shelves to rerender
    fireEvent.resize(window);
  }

  function scrollResize() {
    let scrollY = window.scrollY;
    let spacer = document.getElementById("spacer");
    if (scrollY < 120 && window.innerHeight > 800) {
      spacer.style.height = (160-scrollY)+"px";
    } else {
      spacer.style.height = "50px";
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", scrollResize);

    return () => {
    // Clean up listener on unmount
      window.addEventListener("scroll", scrollResize);
    };
  }, []);

  return (
    <>
      <aside id='aside' className={ showAside ? 'show' : '' } onDrop={addToStack}>
        <div id='spacer' />
      </aside>
      <div className='toggle_aside_wrapper'>
        <button id='toggle_aside' onClick={toggleAside} title="Show/hide stack of books">
          <IconContext.Provider value={{}}>
            { showAside ? <FaChevronRight /> : <FaChevronLeft /> }
          </IconContext.Provider>
        </button>
      </div>
    </>
  );
}

export default Aside;
