import React, { useState } from 'react';
import './App.css';
import { Navbar, Nav, NavDropdown, Button, Jumbotron } from 'react-bootstrap';

import Data from './data.js';
import Product from './component/Product';
import Detail from './component/Detail';

import { Link, Route, Switch } from 'react-router-dom';
import axios from 'axios';

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
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/detail/:id">Detail</Nav.Link>
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

      <Switch>  

        <Route exact path="/">
          <Jumbotron className="background">
            <h1>20% Season OFF</h1>
            <p>
              This site offer a biggest sale product in the Korea.
              We hope you to enjoy here</p>
            <p>
              <Button variant="primary">Learn more</Button>
            </p>
          </Jumbotron>

          <div className="container">
            <div className="row">  
              {
                shoes.map((a, i) => {
                  return (
                    <Product shoes={shoes[i]} i={i} key={i} />
                  )
                })
              }

            </div>

            <button className="btn btn-primary" onClick={() => {
              axios.get('https://codingapple1.github.io/shop/data2.json')
                .then((result) => {
                  console.log(result.data)
                  setShoes([...shoes, ...result.data])
                })
                .catch(() => {
                  console.log('failure')
                })

            }}>더보기</button>
          </div>
        </Route>

        <Route exact path="/detail/:id">
          <Detail shoes={shoes} />
        </Route>

        <Route path="/:id"> 
          <div>아무거나 적었을 때 이거 보여주세요</div>
        </Route>

      </Switch >
    </div >
  );
}

export default App;
