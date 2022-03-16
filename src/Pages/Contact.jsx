import React from "react";
import NavBar from "../components/Navbar/NavBar";
import Form from "../components/Form/Form";
import { Link } from "react-router-dom";

function Contact({ width }) {
  return (
    <div className="contact">
      <NavBar width={width}></NavBar>
      <div className="contact-content">
        <h1 className="gallery-header">Contact</h1>
        <div className="contact-forms">
       <Form></Form>
          
          
        </div>
        {width < 1200 && (
          <div className="social-contact">
            <a
              href="https://www.instagram.com/obli.png/"
              className="fab fa-instagram icons"
            ></a>
            <a
              href="https://www.facebook.com/"
              className="fab fa-facebook icons"
            ></a>
            <a href="https://www.patreon.com/" className="fab fa-patreon icons"></a>
          </div>
        )}
      </div>
    </div>
  );
}

export default Contact;
