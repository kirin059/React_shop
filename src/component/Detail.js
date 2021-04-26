import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import { Nav } from 'react-bootstrap';
import { CSSTransition } from 'react-transition-group'
import Info from './Info';
import './Detail.scss';


const Detail = (props) => {
    let [alert, setAlert] = useState(true)

    let [push, setPush] = useState(0)
    let [switchs, setSwitchs] = useState(false)

    let history = useHistory;
    let { id } = useParams();

    useEffect(() => {
        let timer = setTimeout(() => { setAlert(false) }, 2000);
        return () => { clearTimeout(timer) }  
    }, [alert])  

    let productsId = props.shoes.find((productId) => {
        return productId.id == id
    })

    function handleCount() {
        let newArr = [...props.lest];
        newArr[0] = 9;
        props.setLest(newArr)
    }

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
                        <Info  lest={props.lest}/>

                        <button className="btn btn-danger order" onClick={() => { props.setLest([9, 10, 11]) }}> 주문하기</button>
                        <button className="btn btn-danger back" onClick={() => { history.push('/') }}>Back</button>
                    </div>
                </div>

                <Nav className="mt-5" variant="tabs" defaultActiveKey="link-0">
                  <Nav.Item>
                    <Nav.Link eventKey="link-0" onClick={()=>{ setSwitchs(false); setPush(0)}}>Active</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="dink-1" onClick={()=>{ setSwitchs(false); setPush(1)}}>Option-2</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="dink-1" onClick={()=>{ setSwitchs(false); setPush(2)}}>Option-3</Nav.Link>
                  </Nav.Item>
                </Nav>

                <CSSTransition in={switchs} classNames="effect" timeout={500}>  
                  <TapContent push={push} setSwitchs={setSwitchs}/>
                </CSSTransition>
            </div>
    );
};

function TapContent(props) {

  useEffect( ()=> {
    props.setSwitchs(true)
  });

  if (props.push === 0) {
   return <div style={{paddingTop: '30px'}}> This shoes has a name called White and Black </div>
  }
  else if(props.push === 1) {
    return <div style={{paddingTop: '30px'}}> There are 4 colors : black, red, yellow, green </div>
  }
  else if(props.push === 2) {
    return <div style={{paddingTop: '30px'}}> If you are join our website, you can gain 2 coupones for sales. </div>
  }
}

export default Detail;