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
          <Form for="name" type="text" name="Your name"></Form>
          <Form for="email" type="email" name="Email*"></Form>
          <Form for="subject" type="text" name="Subject"></Form>
          <div>
            <label for="msg" className="form-label">
              Message
            </label>
            <textarea class="form-control" id="msg" rows="3"></textarea>
          </div>
        </div>
        {width < 1200 && (
          <div className="social-contact">
            <a
              href="https://www.instagram.com/obli.png/"
              class="fab fa-instagram icons"
            ></a>
            <a
              href="https://www.facebook.com/"
              class="fab fa-facebook icons"
            ></a>
            <a href="https://www.patreon.com/" class="fab fa-patreon icons"></a>
          </div>
        )}
      </div>
    </div>
  );
}

export default Contact;
