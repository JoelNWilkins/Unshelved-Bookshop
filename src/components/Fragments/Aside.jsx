import React from 'react';
import { addToStack } from '../../utils';

function Aside() {
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
    <aside id='aside' onDrop={addToStack}>
      <div id='spacer' />
    </aside>
  );
}

export default Aside;
