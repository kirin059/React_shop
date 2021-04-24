import React from 'react';

const Product = (props) => {

    return (
        <div className="col-md-4">
            <img src={'http://codingapple1.github.io/shop/shoes' + (props.i + 1) + '.jpg'} width="100%" />
            <h4> {props.shoes.title} </h4>
            <p> {props.shoes.content} & {props.shoes.price} </p>
        </div>
    );
};

export default Product;