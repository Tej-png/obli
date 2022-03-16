import React from 'react'
import { Link } from "react-router-dom";

const CarouselItem = ({url,width}) => {
  return (
    <div className="carousel-item ">
          
          <img src={url} className="carousel-img"></img>
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
  )
}

export default CarouselItem