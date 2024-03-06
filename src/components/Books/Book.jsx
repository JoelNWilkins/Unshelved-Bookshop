import React from 'react';

function Book({ details }) {
    function drag(event) {
        event.dataTransfer.setData("text", event.target.id);
    }
    
    return (
        <div id={details?.isbn} className={'book '+details?.className} draggable='true' onDragStart={drag} style={details?.style}>
            <div className='book top' />
            <img className='book front' src={details?.front_cover} alt={details?.cover + " front cover"} />
            <div className='book back' />
            <div className='book spine'>{details?.title}</div>
        </div>
    )
}

export default Book;