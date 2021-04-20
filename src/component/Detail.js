import React, { useState } from 'react';
import { useHistory } from 'react-router';

const Detail = () => {

    // 방문 기록이 전부 담겨있는 Object (=hook)
    let history = useHistory;

    return (
        <div className="detail">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%" />
                    </div>
                    <div className="col-md-6 mt-4">
                        <h4 className="pt-5">상품명</h4>
                        <p>상품설명</p>
                        <p>120000원</p>
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