import React from 'react';

function Book({ details }) {
  function preview(event) {
    let preview = document.getElementById('preview');
    let element = event.target;
    if (element.parentNode.classList.contains('book')) {
      // For the case when the user has clicked a child element of a book
      // (e.g. the front cover or the spine), then take the parent node
      element = element.parentNode;
    }
    if (element.classList.contains('book')) {
      preview.innerHTML = element.outerHTML;
      preview.style.display = 'flex';
      element.classList.add('hide');
    }
  }

  let style = {
    ...details?.style,
    '--height': (details?.height * 2)+'px',
    '--width': (details?.width * 2)+'px',
    '--depth': (details?.depth * 2)+'px'
  };
  
  return (
    <div
      id={details?.isbn}
      className={`book${ details?.unavailable === true ? ' unavailable' : '' }`}
      style={style}
      draggable='true'
      onDoubleClick={preview}
    >
      <div className='top' />
      { details?.front_cover !== undefined ?
        <img className='front' src={details?.front_cover} alt={details?.title + ' front cover'} />
        :
        <div className='front'>
          <h1>{details?.title}</h1>
          <br />
          <h3>{details?.author}</h3>
        </div>
      }
      { details?.back_cover !== undefined ?
        <img className='back' src={details?.back_cover} alt={details?.title + ' back cover'} />
        :
        <div className='back' />
      }
      { details?.spine !== undefined ?
        <img className='spine' src={details?.spine} alt={details?.title + ' spine'} />
        :
        <div className='spine'>{details?.title}</div>
      }
    </div>
  )
}

export default Book;