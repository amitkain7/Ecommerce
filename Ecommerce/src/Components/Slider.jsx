import React, { useState } from 'react'
import './components.css'
import SliderWrapper from './SliderWrapper'

function Slider() {
  const [slideIndex, setSlideIndex] = useState(0)
  function handleClick(direction){
    if(direction === 'left'){

      setSlideIndex(slideIndex >0 ? slideIndex-1 : 2)
    }
    
    else{
      setSlideIndex(slideIndex < 2 ? slideIndex+1 : 0);
    }

  }
 
 


  return (
    <div className='slider'>

      <div className='left' onClick={() =>handleClick('left')}><img src='./public/dot.png' width='16px' /></div>
       <SliderWrapper slideIndex={slideIndex}  />
      <div className="right" onClick={() =>handleClick('right')}><img src='./public/dot.png' width='16px' /></div>
    </div>
  )
}

export default Slider