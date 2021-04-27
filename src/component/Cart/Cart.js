import React from 'react';
import { Table  } from 'react-bootstrap';
import { connect } from 'react-redux';

import './Cart.scss';

const Cart = (props) => {
    return (
        <div>
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
                                <td>{i+1}</td>
                                <td> { props.state[i].name } </td>
                                <td> { props.state[i].quan } </td>
                                <td>
                                    <button type="button" class="btn btn-warning" style={{paddigRight: '5px'}} onClick={() => { props.dispatch({type: 'add'}) }}>+</button>
                                    <button type="button" class="btn btn-warning" onClick={() => { props.dispatch({type: 'substract'}) }}>-</button>
                                </td>
                            </tr>
                        )
                    } )
                }

                </tbody>
            </Table>
        </div>
    );
};

function cartInfo(state) {
    return {
        state: state
    }
};

export default connect(cartInfo) (Cart)