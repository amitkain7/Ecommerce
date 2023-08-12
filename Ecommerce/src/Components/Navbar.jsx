import React from 'react'
import './Components.css'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';





function Navbar() {

  const quantity = useSelector(state => state.cart.cartquantity)

  return (
    <div className='Navbar'>
      <div className='wrapper'>
        <div className='left'>
          <span className='language'>EN</span>
          <div className='searchContainer'>
            <input type='text' className='navbar-input' placeholder='search' />

            <button> <SearchOutlinedIcon /> </button>
          </div>

        </div>
        <div className='center'>
          <div className="logo">
            DYOR
          </div>
        </div>
        <div className="right">

          <Link to='/Regsiter' className='link'>
            <div className='Regsiter'>Regsiter</div>
          </Link>
          <Link to='/login' className='link'>

            <div className='login'>Login</div>
          </Link>

          <Link className='link' to='/Cart'>

            <div className='cart'>

              <ShoppingCartOutlinedIcon />
              <span>{quantity}</span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar