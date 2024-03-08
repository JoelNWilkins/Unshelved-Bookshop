import React from 'react';

function Aside() {
  function allowDrop(event) {
    if (event.target.id === 'aside') {
      event.preventDefault();
    }
  }

  function drop(event) {
    event.preventDefault();
    let data = event.dataTransfer.getData('text');
    let element = document.getElementById(data);
    element.style.left = (50 * Math.random())+'px';
    element.style.zIndex = null;
    event.target.appendChild(element);
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
    <aside id='aside' onDrop={drop} onDragOver={allowDrop}>
      <div id='spacer'></div>
    </aside>
  );
}

export default Aside;
