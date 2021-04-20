import React, { useState } from 'react';
import './App.css';
import { Navbar, Nav, NavDropdown, Button, Jumbotron } from 'react-bootstrap';
import Data from './data.js';
import Product from './component/Product'

function App() {

  let [shoes, setShoes] = useState(Data);

  return (
    <div className="App">
      {/* nav bootstrap */}
      <Navbar bg="light" expand="lg" >
        <Navbar.Brand href="#home">Shoe Shop</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      {/* jumbotron bootstrap */}
      <Jumbotron className="background">
        <h1>20% Season OFF</h1>
        <p>
          This is a simple hero unit, a simple jumbotron-style component for calling
          extra attention to featured content or information.
        </p>
        <p>
          <Button variant="primary">Learn more</Button>
        </p>
      </Jumbotron>

      {/* 상품표기(3등분) */}
      <div className="container">
        <div className="row">  {/* 총 12개의 column(기본)으로 나누겠다는 bootstrap 문법 */}

          {/* col-4 : 4개의 row로 나누겠다는 bootstrap 문법  / col-md-4 : 모바일에서 세로 1열 정렬 되게 만드는 bootstrap 문법 */}
          {/* <div className="col-md-4"> 
            <img src="http://codingapple1.github.io/shop/shoes1.jpg" width="100%" />
            <h4> {shoes[0].title} </h4>
            <p> {shoes[0].content} & {shoes[0].price} </p>
          </div>

          <div className="col-md-4">
            <img src="http://codingapple1.github.io/shop/shoes2.jpg" width="100%" />
            <h4> {shoes[1].title} </h4>
            <p> {shoes[1].content} &  {shoes[1].price} </p>
          </div>

          <div className="col-md-4">
            <img src="http://codingapple1.github.io/shop/shoes3.jpg" width="100%" />
            <h4> {shoes[2].title} </h4>
            <p> {shoes[2].content} &  {shoes[2].price} </p>
          </div> */}

          {
            shoes.map((a, i) => {
              return (
                <Product shoes={shoes[i]} i={i} />
              )
            })
          }

        </div>
      </div>

    </div>
  );
}

export default App;
