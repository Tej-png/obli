import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function NavBar({ width }) {
  return (
    <nav className="navbar sticky-top">
      <Link to="/" className="brand">
        <h1 className="brand">Obli</h1>
      </Link>
      <div className="container-fluid" style={{ padding: "0" }}>
        {width <= 1200 ? (
          <div>
            <button
              href="#carouselExampleFade"
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <i className="fas fa-bars menu"></i>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav">
                <div className="nav-items">
                  <Link
                    to="/"
                    className="nav-btns"
                   
                  >
                    <button className="btn nav-link nav-item">Home</button>
                  </Link>
                  <Link to="/artworks" >
                    <button className="btn nav-link nav-item">Artworks</button>
                  </Link>

                  <Link to="/contact" >
                    <button className="btn nav-link nav-item">Contact</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <>
            <div className="navbar-nav">
              <div className="nav-items">
                <Link to="/" >
                  <button className="btn nav-link nav-item">Home</button>
                </Link>
                <Link to="/artworks">
                  <button className="btn nav-link nav-item">Artworks</button>
                </Link>

                <Link to="/contact">
                  <button className="btn nav-link nav-item">Contact</button>
                </Link>
              </div>
            </div>
          </>
        )}
      </div>
      {width >= 1200 && (
        <div className="social">
          <a
            href="https://www.instagram.com/obli.png/"
            className="fab fa-instagram icons"
          ></a>
          <a href="https://www.facebook.com/" className="fab fa-facebook icons"></a>
          <a href="https://www.patreon.com/" className="fab fa-patreon icons"></a>
        </div>
      )}
    </nav>
  );
}

export default NavBar;
