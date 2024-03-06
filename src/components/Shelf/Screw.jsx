import React from 'react'
import { flathead } from '../../assets';

function Screw() {
  function randomRotation() {
    let a = (Math.random() - 1) * 180;
    return "rotate("+a+"deg)";
  }

  return (
    <img className='screw' src={flathead} alt='' style={{transform: randomRotation()}} />
  );
}

export default Screw;