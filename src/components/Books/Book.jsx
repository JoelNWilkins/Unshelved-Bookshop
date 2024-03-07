import React from 'react';
import './_books.scss';

function Book({ details }) {
  function drag(event) {
    event.dataTransfer.setData('text', event.target.id);
  }

  function preview(event) {
    let preview = document.getElementById('preview');
    let element = event.target;
    if (element.className !== 'book') {
      element = element.parentNode;
    }
    preview.innerHTML = element.outerHTML;
    preview.style.display = 'flex';
  }

  let style = {...details?.style};
  style['--height'] = (details?.height * 2)+'px';
  style['--width'] = (details?.width * 2)+'px';
  style['--depth'] = (details?.depth * 2)+'px';
  
  return (
    <div id={details?.isbn} className='book' style={style} draggable='true' onDragStart={drag} onDoubleClick={preview}>
      <div className='top' />
      { details?.front_cover !== undefined ?
        <img className='front' src={details?.front_cover} alt={details?.front_cover + ' front cover'} />
        :
        <div className='front'>
          <h1>{details?.title}</h1>
          <br />
          <h3>{details?.author}</h3>
        </div>
      }
      { details?.back_cover !== undefined ?
        <img className='back' src={details?.back_cover} alt={details?.back_cover + ' back cover'} />
        :
        <div className='back' />
      }
      <div className='spine'>{details?.title}</div>
    </div>
  )
}

export default Book;