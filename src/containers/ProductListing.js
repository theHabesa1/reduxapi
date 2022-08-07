import React from 'react'
import { useSelector } from 'react-redux'
import ProductComponent from './ProductComponent';

function ProductListing() {
    const products = useSelector((state) => state);
    console.log(products);
  return (
    <div className='ui grid container'>
        <br/>
        <ProductComponent/>
        </div>
  )
}

export default ProductListing