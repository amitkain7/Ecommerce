import React, { useEffect, useState } from 'react'

import Product from './Product'
import axios from 'axios'
import './components.css'
function Products({ cat, filters, sort }) {
 

  const [Products, setProducts] = useState([])
  const [filtersProducts, setFiltersProducts] = useState([])

  useEffect(() => {
    const getProducts = async () => {
      try {

        const res = await axios.get(cat ?
          `http://localhost:5000/api/products?category=${cat}`
          : 'http://localhost:5000/api/products'
        );
        setProducts(res.data);

      }
      catch (err) {
        console.log(err)
      }
    }

    getProducts();
  }, [cat]);

  useEffect(() => {
    cat &&
    setFiltersProducts(
        Products.filter((item) =>
          Object.entries(filters).every(([key, value]) =>
            item[key].includes(value)
          )
        )
      );
  }, [Products, cat, filters]);

  useEffect(() => {
    if (sort === "newest") {
      setFiltersProducts((prev) =>
        [...prev].sort((a, b) => a.createdAt - b.createdAt)
      );
    }
    else if (sort === "asc") {
      setFiltersProducts((prev) =>
        [...prev].sort((a, b) => a.price - b.price)
      );
    }
    else {
      setFiltersProducts((prev) =>
        [...prev].sort((a, b) => b.price - a.price)
      );
    }
  }, [sort])


  return (
    <div className='products'>
      {
        cat ? filtersProducts.map(item => (
          <Product item={item} key={item._id} />

        ))
          : Products
            .slice(0, 8)
            .map(item => (
              <Product item={item} key={item._id} />

            ))
      }

    </div>
  )
}

export default Products