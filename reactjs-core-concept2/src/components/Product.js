import React from 'react';
import '../App.css'

const Product = (props) => {
    return (
        <div className='product'>
            <h2>Product Name: {props.product.name}</h2>
            <h3>Product Price: {props.product.price}</h3>
        </div>
    );
};

export default Product;