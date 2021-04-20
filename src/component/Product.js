import React, { useState } from 'react';

const Product = (props) => {

    return (
        <div className="product">

            <div className="col-md-4">
                <img src="http://codingapple1.github.io/shop/shoes1.jpg" width="100%" />
                <h4> {props.shoes.title} </h4>
                <p> {props.shoes.content} & {props.shoes.price} </p>
            </div>

        </div>
    );
};

export default Product;