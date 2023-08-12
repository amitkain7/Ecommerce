import React from 'react'
import './components.css'
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import MailOutlinedIcon from '@mui/icons-material/MailOutlined';
function Footer() {
  return (
    <div className='footer'>
      <div className='left'>
        <h1 className='logo' style={{cursor:'pointer'}}>DYOR.</h1>
        <p className='desc'>There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don’t look even slightly believable.
        </p>
         <div className="icon">


          <div className='social-icon' style={{color: '#3B5999'}}><FacebookOutlinedIcon /></div>
          <div className='social-icon' style={{color: '#55ACEE'}}><TwitterIcon /></div>
          <div className='social-icon' style={{color: '#E440f5'}}><InstagramIcon /></div>
         </div>
        
      </div>
      <div className="center">
      <h3 className='title'>Useful Links</h3>
        <ul>
          <li>Home</li>
          <li>Cart</li>
          <li>Man Fashion</li>
          <li>Woman Fashion</li>
          <li>Accessories</li>
          <li>My Account</li>
          <li>Order Tracking</li>
          <li>Wishlist</li>
          <li>Wishlist</li>
          <li>Terms</li>
        </ul>
      </div>
      <div className='right'>
         <h3>Contact</h3>
        <div >
          <FmdGoodOutlinedIcon/> 622 Dixie Path , South Tobinchester 98336
        </div>
        <div>
          <LocalPhoneOutlinedIcon/> +1 234 56 78
        </div>
        <div>
          <MailOutlinedIcon/>   contact@dyor.com
        </div>
        <img src="https://i.ibb.co/Qfvn4z6/payment.png" style={{width: '50%', height: '50px', cursor: 'pointer' , marginTop: '5px'}} />
      </div>
    </div>
  )
}

export default Footer