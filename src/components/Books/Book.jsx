import React from 'react';

function Book({ details }) {
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
    >
      <div className='top' />
      { details?.front_cover !== undefined ?
        <img className='front' src={details?.front_cover} alt={details?.title + ' by ' + details?.author} />
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