import React from "react";


export const Footer = () => {
  return (
    <>
    <div className="container py-3">
<footer className="pt-4 my-md-5 pt-md-5 border-top">
    <div className="row">
      <div className="col-12 col-md">
        <img 
            className="mb-2" 
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png" 
            alt="" 
            width="30" 
            height="30"/>
        <small className="d-block mb-3 text-muted">© 2022</small>
      </div>
      <div className="col-6 col-md">
        <h5>Features</h5>
        <ul className="list-unstyled text-small">
          <li className="mb-1"><a className="link-secondary text-decoration-none" href="#a">Cool stuff</a></li>
          <li className="mb-1"><a className="link-secondary text-decoration-none" href="#a">Random feature</a></li>
          <li className="mb-1"><a className="link-secondary text-decoration-none" href="#a">Team feature</a></li>
          <li className="mb-1"><a className="link-secondary text-decoration-none" href="#a">Stuff for developers</a></li>
          <li className="mb-1"><a className="link-secondary text-decoration-none" href="#a">Another one</a></li>
          <li className="mb-1"><a className="link-secondary text-decoration-none" href="#j">Last time</a></li>
        </ul>
      </div>
      <div className="col-6 col-md">
        <h5>Resources</h5>
        <ul className="list-unstyled text-small">
          <li className="mb-1"><a className="link-secondary text-decoration-none" href="#a">Resource</a></li>
          <li className="mb-1"><a className="link-secondary text-decoration-none" href="#a">Resource name</a></li>
          <li className="mb-1"><a className="link-secondary text-decoration-none" href="#a">Another resource</a></li>
          <li className="mb-1"><a className="link-secondary text-decoration-none" href="#a">Final resource</a></li>
        </ul>
      </div>
      <div className="col-6 col-md">
        <h5>About</h5>
        <ul className="list-unstyled text-small">
          <li className="mb-1"><a className="link-secondary text-decoration-none" href="#a">Team</a></li>
          <li className="mb-1"><a className="link-secondary text-decoration-none" href="#a">Locations</a></li>
          <li className="mb-1"><a className="link-secondary text-decoration-none" href="#a">Privacy</a></li>
          <li className="mb-1"><a className="link-secondary text-decoration-none" href="#a">Terms</a></li>
        </ul>
      </div>
    </div>
  </footer>  
  </div>
    </>
  );
};