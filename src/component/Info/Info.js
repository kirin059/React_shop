import React, { useContext } from 'react';
import {lestContext} from '../../App'

const Info = () => {

    let lest = useContext(lestContext);

    return (
        <div>
            <p>재고: {lest[0]}</p>
        </div>
    );
};

export default Info;