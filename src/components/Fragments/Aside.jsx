import React from 'react';

function Aside() {
  function drag(event) {
    if (event.target.nodeName !== '#text') {
      let element = event.target;
      console.log(element);
      if (element.id === '') {
        element = element.parentNode;
      }
      if (element.classList.contains('book')) {
        event.dataTransfer.setData('text', element.id);
      }
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
    if (element !== null && element.parentNode.id !== 'preview') {
      if (element.id.includes(':')) {
        element.id = element.id.split(':')[0] + ':' + Date.now();
      } else {
        element.id += ':' + Date.now();
      }
      element.style.left = (50 * Math.random())+'px';
      element.style.zIndex = null;
      element.classList.remove('hide');
      event.target.appendChild(element);
    }
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

  document.addEventListener("dragstart", drag);
  document.addEventListener("scroll", scrollResize);

  return (
    <aside id='aside' onDrop={drop} onDragOver={allowDrop}>
      <div id='spacer'></div>
    </aside>
  );
}

export default Aside;
