import React from "react";
//import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


import { Menu } from './components/navbar';
import { Body } from './components/body';
import { Footer } from './components/foot';


function App() {
  return ( 
    <div className="App">
      <Menu/>
      <header className="App-header">
        <Body/>
      </header>
      <Footer/>
    </div>
  );
}

export default App;
