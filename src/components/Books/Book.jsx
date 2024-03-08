import React from 'react';

function Book({ details }) {
  function preview(event) {
    let preview = document.getElementById('preview');
    let element = event.target;
    if (element.className !== 'book') {
      element = element.parentNode;
    }
    preview.innerHTML = element.outerHTML;
    preview.style.display = 'flex';
    element.classList.add('hide');
  }

  let style = {...details?.style};
  style['--height'] = (details?.height * 2)+'px';
  style['--width'] = (details?.width * 2)+'px';
  style['--depth'] = (details?.depth * 2)+'px';
  
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
      <div className='spine'>{details?.title}</div>
    </div>
  )
}

export default Book;