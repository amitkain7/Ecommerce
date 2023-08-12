import React from 'react'
import './components.css'
import { Link } from 'react-router-dom'
function CategoryItem({item}) {
  return (
    <div className='categoryItem'>
      <Link to={`/products/${item.cat}`}>
        <img className='categoryImage' src={item.img} />

        <div className='info'>
            <h1 className='title'>{item.title}</h1>
            <button className='shop'>SHOP NOW</button>
      
        </div>
      </Link>
    </div>
  )
}

export default CategoryItem