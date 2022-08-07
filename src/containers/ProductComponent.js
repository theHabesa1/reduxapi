import React from 'react'
import { useSelector } from 'react-redux';

const ProductComponent = () => {
    const products = useSelector((state) => state.allProducts.products);
    const{id,title} = products[0];
  return (
    <div className='four wide column'>
        <br/>
        <br/>
        <br/>
        <br/>
        <div className='ui link cards'>
            <div className='card'>
                <div className='image'>
                    <img src={`https://picsum.photos/200/300?random=${id}`} alt={title}/>
                </div>
                    <div className='content'>
                        <div className='header'>{title}</div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default ProductComponent;