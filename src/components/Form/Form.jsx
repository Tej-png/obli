import React from 'react';
import './Form.css'

const Form = (props) => {
  return <>
          <form action="https://formsubmit.co/singh.bir978@gmail.com" className="form"  method="POST">
          <label for="email" className="form-label">Email</label>
          <input type='email' for="email" name="email" className="form-control" placeholder="Your email" required></input>
          <label for="name" className="form-label">Name</label>
          <input type='text' for="name" name="name" className="form-control" placeholder="Your name" ></input>
          <label for="subject" className="form-label">Subject</label>
          <input type='text' for="subject" name="subject" className="form-control" placeholder="Subject" ></input>
          <div>
            <label for="msg" className="form-label">
              Message
            </label>
            <textarea className="form-control" name="Message" id="msg" rows="3" placeholder="Write your message here!"></textarea>
          </div>
          <button className='btn btn-light form-btn' type="submit">Send</button>
        </form>
  </>;
};

export default Form;
