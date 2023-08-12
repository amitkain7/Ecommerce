import React from 'react'
import Navbar from '../Components/Navbar'
import Annoucement from '../Components/Annoucement'
import Slider from '../Components/Slider'
import Category from '../Components/Category'
import Products from '../Components/Products'
import Newslatter from '../Components/Newslatter'
import Footer from '../Components/FooterCom'



function Home() {
  return (
    <div>
       <Navbar/> 
       <Annoucement/>
       <Slider/>
       <Category/>
       <Products/>
       <Newslatter/>
       <Footer/>
    </div>
  )
}

export default Home