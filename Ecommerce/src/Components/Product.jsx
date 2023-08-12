
import './components.css'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import { Link} from 'react-router-dom';


function Product({ item }) {
   
  return (
    <div className='product-Item'>
      <img src={item.img} />
      <div className="info">
        <div><ShoppingCartOutlinedIcon /></div>
        <div>
          <Link  className='link' to={`/product/${item._id}`}>
                <SearchOutlinedIcon />
          </Link>
        </div>
        <div><FavoriteBorderOutlinedIcon /></div>
      </div>
    </div>
  )
}

export default Product