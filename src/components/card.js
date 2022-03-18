import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
//import Card from 'react-bootstrap/Card';
//import Button from "react-bootstrap/Button";
import late from '../img/late.png';
 
export const Cards = () => {
  return (
   <>
   <div className="row  mt-3">
   <h2>Bebidas Tradicionales</h2>
    <div className="col-sm-6 col-md-3 ">
        <div className="card" >
            <img className="card-img-top" 
                src={late}
                alt="Card" 
                />
            <div className="card-body">
            <h4 className="card-title">Late en las rocas salvia</h4>
            <p className="card-text">$ 150 mx</p>
            <a href="#z" className="btn btn-primary">See Profile</a>
            </div>
        </div>
    </div>
    <div className="col-sm-6 col-md-3 ">
        <div className="card" >
            <img className="card-img-top" 
                src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png" 
                alt="Card" 
                />
            <div className="card-body">
            <h4 className="card-title">John Doe</h4>
            <p className="card-text">Some example text some example text. John Doe is an architect and engineer</p>
            <a href="#z" className="btn btn-primary">See Profile</a>
            </div>
        </div>
    </div>
    <div className="col-sm-6 col-md-3 ">
        <div className="card" >
            <img className="card-img-top" 
                src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png" 
                alt="Card" 
                />
            <div className="card-body">
            <h4 className="card-title">John Doe</h4>
            <p className="card-text">Some example text some example text. John Doe is an architect and engineer</p>
            <a href="#z" className="btn btn-primary">See Profile</a>
            </div>
        </div>
    </div>
    <div className="col-sm-6 col-md-3 ">
        <div className="card" >
            <img className="card-img-top" 
                src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png" 
                alt="Card" 
                />
            <div className="card-body">
            <h4 className="card-title">John Doe</h4>
            <p className="card-text">Some example text some example text. John Doe is an architect and engineer</p>
            <a href="#z" className="btn btn-primary">See Profile</a>
            </div>
        </div>
    </div>
    </div>

  </>
  );
};

