import React from 'react'
import Navbar from '../Components/Navbar'
import Annoucement from '../Components/Annoucement'
import './pages.css'
import Products from '../Components/Products'
import Newslatter from '../Components/Newslatter'
import Footer from '../Components/FooterCom'
import { useLocation } from 'react-router-dom'
import { useState } from 'react'
function ProductList() {
  const location = useLocation()
  const cat = location.pathname.split("/")[2];
  const [filter, setFilter] = useState({})
  const [sort, setSort] = useState('newest')
  function handleFilters(event) {
    const { value, name } = event.target

    setFilter(filter => {
      return {
        ...filter,
        [name]: value
      }
    })
  }
  console.log(sort)
  return (
    <div className='productlist'>
      <Navbar />
      <Annoucement />
      <h1 className='title'>{cat}</h1>
      <div className='filterContainer'>
        <div className='filter'>
          <span className='filerText'>Filter Products:</span>
          <select name='color' onChange={handleFilters} >

            <option disabled > color</option>
            <option >white</option>
            <option >black</option>
            <option >red</option>
            <option >blue</option>
            <option >yellow</option>
            <option >green</option>
          </select>
          <select name='size' onChange={handleFilters} >
            <option disabled > size</option>
            <option >xs</option>
            <option >s</option>
            <option >m</option>
            <option >l</option>
            <option >xl</option>


          </select>
        </div>
        <div className='filter'>
          <span className='filerText'>Sort Products:</span>
          <select onChange={(e) => setSort(e.target.value)} >
            <option value='newest'>newest</option>
            <option value="asc">Price(asc)</option>
            <option value='desc' >Price(desc)</option>

          </select>
        </div>


      </div>

      <Products cat={cat} filters={filter} sort={sort} />
      <Newslatter />
      <Footer />
    </div>
  )
}

export default ProductList