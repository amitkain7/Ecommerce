import React, { useEffect, useState } from 'react'
import Navbar from '../Components/Navbar'
import Annoucement from '../Components/Annoucement'
import Newslatter from '../Components/Newslatter'
import Footer from '../Components/FooterCom'
import RemoveCircleOutlineOutlinedIcon from '@mui/icons-material/RemoveCircleOutlineOutlined';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import { useLocation } from 'react-router-dom'
import { publicRequest } from '../requestmethods'
import styled from '@emotion/styled'
import { addProduct } from '../redux/cartRedux'
import { useDispatch } from 'react-redux'

const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0px 5px;
  cursor: pointer;
`;


function Product() {

    const location = useLocation();
   const id = location.pathname.split('/')[2];
   const [product, setProduct] = useState({});
   const [quantity , setQuantity] = useState(1)
   const [color, setColor] =useState('');
   const[size, setSize] = useState('');
   const dispatch = useDispatch()
  

   useEffect(()=>{
       const getProduct = async () => {
        try{
          const res = await publicRequest.get('/products/find/'+id)
          setProduct(res.data)
        }catch(err){
          console.log(err)
        }
       }
    
        getProduct();

   },[id])

   function handleQuantity(type){
        if(type === 'asc'){
            setQuantity(quantity < 0 ? 0 : quantity+1)
        }
        else{
            setQuantity(quantity > 0 ? quantity-1 : 0) 
        }
   }

   function handleClick() {
    dispatch(

        addProduct({...product, quantity, color, size})
    )
   }
    return (
        <div className='product-container'>
            <Navbar />
            <Annoucement />
            <div className='Wrapper'>
                <div className='img-container'>
                    <img src={product.img} />
                </div>
            </div>
            <div className='InfoContainer'>
                <h1 className='title'>{product.title}</h1>
                <p className='desc'>{product.desc}          
                </p>
                <span className='price'>${product.price}</span>
                <div className='filterContainer'>
                    <div className='filter'>
                        <span className='filterTitle'>Color</span>
                        {product.color?.map((c) => (
                <FilterColor color={c} key={c} onClick={() => setColor(c)} />
              ))}
                        
                    </div>
                    <div className="filter">
                        <div className="filterTitle">Size</div>
                        <select onChange={(e) => setSize(e.target.value)} style={{cursor:'pointer'}}>

                       { product.size?.map((s) => (
                                <option key={s} >{s}</option>
                            ))
                        }
                          

                        </select>
                    </div>
                    <div className="AddContainer">
                        <div className="Amountcont">
                            <AddCircleOutlineOutlinedIcon onClick={() => handleQuantity('asc') } sx={{cursor:'pointer'}}/>
                            <span>{quantity}</span>
                            <RemoveCircleOutlineOutlinedIcon onClick={() => handleQuantity('desc')} sx={{cursor:'pointer'}}/>
                        </div>
                        <button className='cart-btn' onClick={handleClick}>ADD TO CART</button>
                    </div>
                </div>
            </div>
            <Newslatter />
            <Footer />
        </div>
    )
}

export default Product