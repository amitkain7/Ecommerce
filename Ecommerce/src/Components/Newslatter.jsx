
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import React from 'react'
import './components.css'
function Newslatter() {
  return (
    <div className='newslatter'>
        <h1 >NewsLetter</h1>
        <div className='desc'>Get timely  updates from your favorite products</div>
        <div className='inputcontainer'>
            <input type="email" placeholder='your email' />
            <button>
              <SendOutlinedIcon/>
            </button>
        </div>

    </div>
  )
}

export default Newslatter