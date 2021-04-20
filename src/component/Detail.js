import React, { useState } from 'react';
import { useHistory, useParams } from 'react-router';

const Detail = (props) => {

    // useHistory : 방문 기록이 전부 담겨있는 Object (=hook)
    let history = useHistory;

    // useParams : 사용자가 입력한 url 파라미터들이 담기는 hook ({id}에 저장한다)
    let { id } = useParams();

    let productsId = props.shoes.find((productId) => {
        return productId.id == id
    })

    return (
        <div className="detail">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <img src={'https://codingapple1.github.io/shop/shoes' + (productsId + 1) + '.jpg'} width="100%" />
                    </div>
                    <div className="col-md-6 mt-4">
                        <h4 className="pt-5"> {productsId.title} </h4>
                        <p> {productsId.content} </p>
                        <p>{productsId.price}0원</p>
                        <button className="btn btn-danger">주문하기</button>
                        <button className="btn btn-danger" onClick={() => { history.goBack(); }}>Back</button>
                        {/* history.goBack() : 이전페이지로 이동 / push('특정경로') : 특정 경로로 이동 */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Detail;