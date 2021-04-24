import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';

import './Detail.scss';


const Detail = (props) => {
    let [alert, setAlert] = useState(true)
    let [inputData, setInputData] = useState('');

    useEffect(() => {
        let timer = setTimeout(() => { setAlert(false) }, 2000);
        return () => { clearTimeout(timer) }  
    }, [alert])  

    let history = useHistory;
    let { id } = useParams();

    let productsId = props.shoes.find((productId) => {
        return productId.id == id
    })

    return (
            <div className="container">
                <h4> Detail </h4>
                {
                    alert === true
                        ? (<div className="my-alert-yellow">
                            <p> 재고가 얼마 남지 않았습니다 </p>
                        </div>)
                        : null
                }

                <div className="row">
                    <div className="col-md-6">
                        <img src={'https://codingapple1.github.io/shop/shoes1.jpg'} width="100%" />
                    </div>
                    <div className="col-md-6 mt-4">
                        <h4 className="pt-5"> {productsId.title} </h4>
                        <p> {productsId.content} </p>
                        <p>{productsId.price}0원</p>
                        <button className="btn btn-danger order">주문하기</button>
                        <button className="btn btn-danger back" onClick={() => { history.push('/') }}>Back</button>
                    </div>
                </div>
            </div>
    );
};

export default Detail;