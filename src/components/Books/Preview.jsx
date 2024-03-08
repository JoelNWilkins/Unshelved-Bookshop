import React, { Children } from 'react';

function Preview({ children }) {
  function closePreview(event) {
    event.stopPropagation();
    if (event.code === 'Escape' || event.target.parentNode.parentNode.id !== 'preview') {
      let preview = document.getElementById('preview');
      if (preview.childElementCount > 0) {
        const id = preview.firstChild.id;
        document.getElementById(id).classList.remove('hide');
      }
      preview.innerHTML = null;
      preview.style.display = 'none';
    }
  }

  document.addEventListener('keydown', closePreview);
  document.addEventListener('click', closePreview);

  return (
    <div id='preview' style={{ display: Children.count(children) !== 0 ? 'flex' : 'none' }} />
  );
}

export default Preview;
