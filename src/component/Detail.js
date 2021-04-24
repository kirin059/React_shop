import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import styled from 'styled-components';

import './Detail.scss';

let 박스 = styled.div`
    padding: 20px;
`
let 제목 = styled.h4`
    font-size: 25px;
    color: ${props => props.color};
`

const Detail = (props) => {
    let [alert, setAlert] = useState(true)
    let [inputData, setInputData] = useState('');

    useEffect(() => {
        let timer = setTimeout(() => { setAlert(false) }, 2000);
        return () => { clearTimeout(timer) }  // 타이머는 제거해줘야 나중에 버그가 안생긴다
    }, [alert])  // state값을 넣을 수 있다. 일단 코드실행 후, alert가 실행되면 멈추라는 뜻(일종의 조건문) 페이지가 재렌더링될때마다 실행되는것을 방지

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
                {/* styled-components로 styling */}
                <박스>
                    <제목 color='#000'>Detail </제목>
                </박스>

                {/* <input onChange={(e) => { setInputData(e.target.value) }} /> */}

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