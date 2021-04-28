import React from 'react';
import { Table  } from 'react-bootstrap';
import { connect } from 'react-redux';

import './Cart.scss';

const Cart = (props) => {
    return (
        <div className="Cart">
            <Table responsive="sm">
                <thead>
                <tr>
                    <th>#</th>
                    <th>상품명</th>
                    <th>수량</th>
                    <th>수량 변경</th>
                </tr>
                </thead>
                <tbody>

                {
                    props.state.map( (a, i) => {
                        return (
                            <tr key={i}>
                                <td>{a.id}</td>
                                <td> { props.state[i].name } </td>
                                <td> { props.state[i].quan } </td>
                                <td>
                                    <button class="btn" onClick={() => { props.dispatch({type: 'add', payload: a.id}) }}>+</button>
                                    <button class="minusBtn btn" onClick={() => { props.dispatch({type: 'substract', payload: a.id}) }}>-</button>
                                </td>
                            </tr>
                        )
                    } )
                }
                </tbody>
            </Table>

            {
                props.alertState === true
                ? (<div className="my-alert">
                    <p>지금 구매하시면 신규할인 20%</p>
                    <button onClick={() => {props.dispatch( {type: 'close'} )}}>닫기</button>
                   </div>)
                : null
            }
        </div>
    );
};

function cartInfo(state) {
    return {
        state: state.reducer,
        alertState: state.reducer2
    }
};

export default connect(cartInfo) (Cart)