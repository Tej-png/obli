import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { motion } from "framer-motion";

function NavBar({ width }) {
  const [isAnimating, setAnimating] = useState(false);
  return (
    <nav className="navbar sticky-top">
      <Link to="/" className="brand">
        <h1 className="brand">Obli</h1>
      </Link>
      <div className="container-fluid" style={{ padding: "0" }}>
        {width <= 1200 ? (
          <div>
            <motion.div
              href="#carouselExampleFade"
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
              onClick={() => setAnimating(!isAnimating)}
              animate={{ position : 'absolute' ,top: isAnimating ? '40px' : '30px'}}
              
            >
              <motion.li
                className="nav-lines"
                animate={{ rotate: isAnimating ? 45 : 0, margin: 0 }}
              ></motion.li>
              <motion.li
                className="nav-lines"
                animate={{ display: isAnimating ? "none" : "block" }}
                initial={{ margin: "10px" }}
              ></motion.li>
              <motion.li
                className="nav-lines"
                animate={{ rotate: isAnimating ? -45 : 0, margin: 0,  position: isAnimating ? "absolute" : 'static',  }}
              ></motion.li>
            </motion.div>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav">
                <div className="nav-items">
                  <Link to="/" className="nav-btns">
                    <motion.button
                      whileBefore
                      transition={{ duration: 0.2 }}
                      className="btn nav-link nav-item"
                    >
                      Home
                    </motion.button>
                  </Link>
                  <Link to="/artworks">
                    <motion.button
                      transition={{ duration: 0.2 }}
                      className="btn nav-link nav-item"
                    >
                      Artworks
                    </motion.button>
                  </Link>

                  <Link to="/contact">
                    <motion.button
                      transition={{ duration: 0.2 }}
                      className="btn nav-link nav-item"
                    >
                      Contact
                    </motion.button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <>
            <div className="navbar-nav">
              <div className="nav-items">
                <Link to="/">
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
          <a
            href="https://www.facebook.com/"
            className="fab fa-facebook icons"
          ></a>
          <a
            href="https://www.patreon.com/"
            className="fab fa-patreon icons"
          ></a>
        </div>
      )}
    </nav>
  );
}

export default NavBar;
