import React from 'react'
import { sliderItems } from '../data'
import './components.css'
function SliderWrapper({slideIndex}) {

    const mystyle = {
        transform: `translateX(${slideIndex * -100}vw)`
    }
  return (
    <div className='wrapper' style={mystyle}>

    {sliderItems.map(item => (
      
      <div className="slide" key={item.id} >


        <div className='imageContainer'>
          <img src={item.img} alt="shopImage" />
        </div>
        <div className='infoContainer'>
          <h1 className='summer-sal'>{item.title}</h1>
          <p className='desc'>{item.desc}</p>
          <button className='show'>SHOW NOW</button>
        </div>
      </div>
    ))};
  </div>
  )
}

export default SliderWrapper