import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

export default class Wellcom  extends React.Component {


    render(){
        return(
            <div>
                

<nav className="navbar navbar-expand-lg navbar-light fixed-top py-3" id="mainNav">
    <div className="headDiv">
    <div className="container" className="containerBack">
      <a className="navbar-brand js-scroll-trigger" href="#page-top">MOSQUES-SERVICE</a>
      <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarResponsive">
        <ul className="navbar-nav ml-auto my-2 my-lg-0">
          <li className="nav-item">
            <a className="nav-link js-scroll-trigger" href="#about">About</a>
          </li>
          <li className="nav-item">
            <a className="nav-link js-scroll-trigger" href="#services">Services</a>
          </li>
          {/* <li className="nav-item">
            <a className="nav-link js-scroll-trigger" href="#portfolio">Portfolio</a>
          </li> */}
          <li className="nav-item">
            <a className="nav-link js-scroll-trigger" href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </div>
    </div>
  </nav>

{/* <!-- Masthead --> */}
  <div className="masthead">
    <div className="container h-100">
      <div className="row h-100 align-items-center justify-content-center text-center">
        <div className="col-lg-10 align-self-end">
          <h1 className="text-uppercase text-white font-weight-bold">Welcome To MOSQUES-SERVICE</h1>
          <hr className="divider my-4"/>
        </div>
        <div className="col-lg-8 align-self-baseline">
          <p className="text-white-75 font-weight-light mb-5">This website aims to serve mosques and provide what it needs, by conncted people how want to help with mosques which need support.</p>
          <a className="btn btn-primary btn-xl js-scroll-trigger" href="#about">Find Out More</a>
        </div>
      </div>
    </div>
  </div>
 
       {/* <!-- About Section --> */}
  <section className="page-section bg-primary-my" id="about">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-8 text-center">
          <h2 className="text-white mt-0">This website under testing!</h2>
          <hr className="divider light my-4"/>
          <p className="text-white-50 mb-4">This website aims to serve mosques and provide what it needs, by conncted people how want to help with mosques which need support.</p>
          {/* <a className="btn btn-light btn-xl js-scroll-trigger" href="#services">Get Started!</a> */}
        </div>
      </div>
    </div>
  </section>    

    {/* <!-- Contact Section --> */}
  <section className="page-section" id="contact">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-8 text-center">
          <h2 className="mt-0">Let's Get In Touch!</h2>
          <hr className="divider my-4"/>
          <p className="text-muted mb-5">Join Our Team!</p>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-4 ml-auto text-center mb-5 mb-lg-0">
          <i className="fas fa-phone fa-3x mb-3 text-muted"></i>
          <div>+1 (00) 555-0000</div>
        </div>
        <div className="col-lg-4 mr-auto text-center">
          <i className="fas fa-envelope fa-3x mb-3 text-muted"></i>  
          {/* <!-- Make sure to change the email address in anchor text AND the link below! --> */}
          <a class="d-block" href="sara-kuddah@hotmail.com">sara-kuddah@hotmail.com</a>
        </div>
      </div>
    </div>
  </section>
            {/* <div className="container">
              <h3>Collapsible Navbar</h3>
              <p>In this example, the navigation bar is hidden on small screens and replaced by a button in the top right corner (try to re-size this window).</p>
              <p>Only when the button is clicked, the navigation bar will be displayed.</p>
              <p>Tip: You can also remove the .navbar-expand-md className to ALWAYS hide navbar links and display the toggler button.</p>
            </div> */}

            </div>
            
        );
    }
}