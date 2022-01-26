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
      <div class="carousel-indicators">
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
          
          <img src="./assets/images/image0.png" className="carousel-img"></img>
          {width<1200&& <div className="carousel-caption  ">
            <h5 className="hero-text">Check out my Artwork</h5>
            <Link to='/artworks'><button className="btn hero-btn nav-item">Artworks</button></Link> 
            <div className="social">
              <i class="fab fa-instagram"></i>
              <i class="fab fa-facebook"></i>
              <i class="fab fa-patreon"></i>
            </div>
            
            
          </div>}
          
        </div>
        <div className="carousel-item">
          <img src="./assets/images/one.jpg" className="carousel-img"></img>
          {width<1200&& <div className="carousel-caption  ">
            <h5 className="hero-text">Contact for more info</h5>
            <Link to='/contact'><button className="btn hero-btn nav-item">Contact</button></Link>
            <div className="social">
              <i class="fab fa-instagram"></i>
              <i class="fab fa-facebook"></i>
              <i class="fab fa-patreon"></i>
            </div>
            
          </div>}
          
        </div>
        <div className="carousel-item">
          <img src="./assets/images/two.jpg" className="carousel-img"></img>
          {width<1200 && <div className="carousel-caption ">
            <h5 className="hero-text">Check out my Artwork</h5>
            <Link to='/artworks'><button className="btn hero-btn nav-item">Artworks</button></Link> 
            <div className="social">
              <i class="fab fa-instagram"></i>
              <i class="fab fa-facebook"></i>
              <i class="fab fa-patreon"></i>
            </div>
          </div> }
          
        </div>
      </div>
      <button
        class="carousel-control-prev carousel-btn"
        type="button"
        data-bs-target="#carouselExampleFade"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next carousel-btn"
        type="button"
        data-bs-target="#carouselExampleFade"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default Carousel;