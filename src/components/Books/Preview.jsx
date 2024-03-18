import React from 'react';
import { PiArrowsClockwiseBold } from "react-icons/pi";

function Preview() {
  function closePreview() {
    let preview = document.getElementById('preview');
    if (preview.childElementCount > 0) {
      const id = preview.firstChild.id;
      document.getElementById(id).classList.remove('hide');
    }
    if (preview.children[0].id !== 'flip_book') {
      preview.removeChild(preview.children[0]);
    }
    preview.style.display = 'none';
  }

  function openBook() {
    let preview = document.getElementById('preview');
    let book = preview.children[0];
    book.classList.add('open');

    let containsInside = false;
    for (let child of book.children) {
      if (child.classList.contains('front')) {
        child.classList.add('hidden');
      } else if (child.id === 'inside') {
        containsInside = true;
      }
    }

    if (!containsInside) {
      let inside = document.createElement('div');
      inside.setAttribute('id', 'inside');
      book.appendChild(inside);
    }
  }

  function closeBook() {
    let preview = document.getElementById('preview');
    let book = preview.children[0];
    book.classList.remove('open');

    for (let child of book.children) {
      if (child.classList.contains('front')) {
        child.classList.remove('hidden');
      } else if (child.id === 'inside') {
        book.removeChild(child);
      }
    }
  }

  function handlePreviewEvent(event) {
    event.stopPropagation();
    
    // Ignore when the user clicks the sign in/out button
    if (event.target.id === 'sign_in_out') {
      return;
    } else if (event.target.id === 'flip_book') {
      return;
    }

    // Close the preview when the user presses the escape key
    // or when they click off of the book
    if (event.type === 'click' && event.target.id === 'inside') {
      closeBook();
    } else if (event.type === 'keydown') {
      if (event.code === 'Escape') {
        closePreview();
      }
    } else if (event.type === 'click') {
      const descendent = (
        event.target.parentNode.parentNode.id === 'preview' ||
        event.target.parentNode.parentNode.parentNode.id === 'preview'
      );

      if (!descendent) {
        closePreview();
      } else if (event.target.classList.contains('front')) {
        openBook();
      }
    }
  }

  function flipBook() {
    let preview = document.getElementById('preview');
    let book = preview.children[0];
    book.classList.toggle('flipped');
    if (book.classList.contains('open')) {
      closeBook();
    }
  }

  document.addEventListener('keydown', handlePreviewEvent);
  document.addEventListener('click', handlePreviewEvent);

  return (
    <div id='preview' style={{ display: 'none' }}>
      <button id='flip_book' onClick={flipBook}><PiArrowsClockwiseBold size='25px' /></button>
    </div>
  );
}

export default Preview;
