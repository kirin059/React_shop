import React, { useContext } from 'react';
import { useHistory } from 'react-router';
import {lestContext} from '../../App'

const Product = (props) => {

    let lest = useContext(lestContext);
    let history = useHistory();

    return (
        <div className="col-md-4" onClick={()=>{ history.push('/detail/' + props.shoes.id) }}>
            <img src={'http://codingapple1.github.io/shop/shoes' + (props.i + 1) + '.jpg'} width="100%" />
            <h4> {props.shoes.title} </h4>
            <p> {props.shoes.content} & {props.shoes.price} </p>
            <p> 재고 : {lest[props.i]}</p>
        </div>
    );
};

export default Product;