import React from 'react';

function Book({ details }) {
  let style = {
    ...details?.style,
    '--height': (details?.dimensions?.height * 2)+'px',
    '--width': (details?.dimensions?.width * 2)+'px',
    '--depth': (details?.dimensions?.depth * 2)+'px'
  };
  
  return (
    <div
      id={details?.isbn}
      className={`book${ details?.unavailable === true ? ' unavailable' : '' }`}
      style={style}
      draggable='true'
    >
      <div className='top' />
      { details?.images?.front !== undefined ?
        <img className='front' src={details?.images?.front} alt={details?.title + ' by ' + details?.author} />
        :
        <div className='front'>
          <h1>{details?.title}</h1>
          <br />
          <h3>{details?.author}</h3>
        </div>
      }
      { details?.images?.back !== undefined ?
        <img className='back' src={details?.images?.back} alt={details?.title + ' back cover'} />
        :
        <div className='back' />
      }
      { details?.images?.spine !== undefined ?
        <img className='spine' src={details?.images?.spine} alt={details?.title + ' spine'} />
        :
        <div className='spine'>{details?.title}</div>
      }
    </div>
  )
}

export default Book;