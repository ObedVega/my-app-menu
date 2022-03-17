import React from "react";
//import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


import { Menu } from './components/navbar';
import { Body } from './components/body';
import { Footer } from './components/foot';
import Container from 'react-bootstrap/Container';


function App() {
  return ( 
    <div className="App">
      <Menu/>
      <Container>
        <Body/>
      </Container>
      <Footer/>
    </div>
  );
}

export default App;
