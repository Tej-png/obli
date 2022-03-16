import React from "react";
import "./Carsousel.css";
import { Link } from "react-router-dom";

function Carousel({width}) {
  return (
    <div
      id="carouselExampleFade"
      className="carousel slide carousel-fade"
      data-bs-ride="carousel"
    >
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          
          <img src="https://firebasestorage.googleapis.com/v0/b/obli-710ad.appspot.com/o/three.jpg?alt=media&token=abbb681c-ea8c-4dc8-b3f1-9480b2fcbc7e" className="carousel-img"></img>
          {width<1200&& <div className="carousel-caption  ">
            <h5 className="hero-text">Check out my Artwork</h5>
            <Link to='/artworks'><button className="btn hero-btn nav-item">Artworks</button></Link> 
            <div className="social">
              <i className="fab fa-instagram"></i>
              <i className="fab fa-facebook"></i>
              <i className="fab fa-patreon"></i>
            </div>
            
            
          </div>}
          
        </div>
        <div className="carousel-item">
          <img src="https://firebasestorage.googleapis.com/v0/b/obli-710ad.appspot.com/o/three.jpg?alt=media&token=abbb681c-ea8c-4dc8-b3f1-9480b2fcbc7e" className="carousel-img"></img>
          {width<1200&& <div className="carousel-caption  ">
            <h5 className="hero-text">Contact for more info</h5>
            <Link to='/contact'><button className="btn hero-btn nav-item">Contact</button></Link>
            <div className="social">
              <i className="fab fa-instagram"></i>
              <i className="fab fa-facebook"></i>
              <i className="fab fa-patreon"></i>
            </div>
            
          </div>}
          
        </div>
        <div className="carousel-item">
          <img src="https://firebasestorage.googleapis.com/v0/b/obli-710ad.appspot.com/o/three.jpg?alt=media&token=abbb681c-ea8c-4dc8-b3f1-9480b2fcbc7e" className="carousel-img"></img>
          {width<1200 && <div className="carousel-caption ">
            <h5 className="hero-text">Check out my Artwork</h5>
            <Link to='/artworks'><button className="btn hero-btn nav-item">Artworks</button></Link> 
            <div className="social">
              <i className="fab fa-instagram"></i>
              <i className="fab fa-facebook"></i>
              <i className="fab fa-patreon"></i>
            </div>
          </div> }
          
        </div>
      </div>
      <button
        className="carousel-control-prev carousel-btn"
        type="button"
        data-bs-target="#carouselExampleFade"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next carousel-btn"
        type="button"
        data-bs-target="#carouselExampleFade"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default Carousel;
