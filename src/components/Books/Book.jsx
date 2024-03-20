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
      className={`book${ details?.stock <= 0 ? ' unavailable' : '' }`}
      style={style}
      draggable='true'
      title='Double click to preview the book or drag and drop the book onto the stack on the right'
    >
      <div className='top' />
      <div className='page'>
        <h1>{details?.title}</h1>
        <h2>{details?.author}</h2>
        { details?.description && details?.description.map((line) => (
          <p>{line}</p>
        ))}
      </div>
      { details?.images?.back !== undefined ?
        <img className='back' src={details?.images?.back} alt={details?.title + ' back cover'} />
        :
        <div className='back'>
          { details?.description && details?.description.map((line) => (
            <p>{line}</p>
          ))}
        </div>
      }
      { details?.images?.front !== undefined ?
        <img className='front' src={details?.images?.front} alt={details?.title + ' by ' + details?.author} />
        :
        <div className='front'>
          <h1>{details?.title}</h1>
          <br />
          <h3>{details?.author}</h3>
        </div>
      }
      { details?.images?.spine !== undefined ?
        <img className='spine' src={details?.images?.spine} alt={details?.title + ' spine'} />
        :
        <div className='spine'>{details?.title}</div>
      }
      <div className='edge' />
    </div>
  )
}

export default Book;