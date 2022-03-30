import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
//import Card from 'react-bootstrap/Card';
//import Button from "react-bootstrap/Button";
import late from '../img/late.png';
import dirtychai from '../img/DirtyChaiEspecias.png';
import keto from '../img/KetoCitrusCoffee.png';
import oreo from '../img/FrappeOreo.png';
 
export const Cards = () => {
  return (
   <>
   <div className="row mt-3">
   <h2>Bebidas Tradicionales</h2>
    <div className="col-sm-6 col-md-3 mb-3 mb-md-0">
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
    <div className="col-sm-6 col-md-3 mb-3 mb-md-0">
        <div className="card" >
            <img className="card-img-top" 
                src={dirtychai} 
                alt="Card" 
                />
            <div className="card-body">
            <h4 className="card-title">Dirty Chai Especias</h4>
            <p className="card-text">$ 60 mx</p>
            <a href="#z" className="btn btn-primary">See Profile</a>
            </div>
        </div>
    </div>
    <div className="col-sm-6 col-md-3 mb-3 mb-md-0">
        <div className="card" >
            <img className="card-img-top" 
                src={keto}
                alt="Card" 
                />
            <div className="card-body">
            <h4 className="card-title">Keto Citrus Coffee</h4>
            <p className="card-text">$ 60 mx</p>
            <a href="#z" className="btn btn-primary">See Profile</a>
            </div>
        </div>
    </div>
    <div className="col-sm-6 col-md-3 mb-3 mb-md-0">
        <div className="card" >
            <img className="card-img-top" 
                src={oreo}
                alt="Card" 
                />
            <div className="card-body">
            <h4 className="card-title">Frappe Oreo</h4>
            <p className="card-text">$ 80 mx</p>
            <a href="#z" className="btn btn-primary">See Profile</a>
            </div>
        </div>
    </div>
    </div>

  </>
  );
};

