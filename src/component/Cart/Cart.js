import React from 'react';
import { Table  } from 'react-bootstrap';
import { connect } from 'react-redux';

const Cart = (props) => {
    return (
        <div>
            <Table responsive="sm">
                <thead>
                <tr>
                    <th>#</th>
                    <th>상품명</th>
                    <th>수량</th>
                    <th>변경</th>
                </tr>
                </thead>
                <tbody>
                {/* <tr>
                    <td>1</td>
                    <td> { props.state[0].name } </td>
                    <td> { props.state[0].quan } </td>
                    <td>Table cell</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td> { props.state[1].name } </td>
                    <td> { props.state[1].quan } </td>
                    <td>Table cell</td>
                </tr> */}
{
    props.state.map( (a, i) => {
        return (
            <tr>
                <td>{i+1}</td>
                <td> { props.state[i].name } </td>
                <td> { props.state[i].quan } </td>
                <td>Table cell</td>
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