import React from 'react';
import './Form.css'

const Form = (props) => {
  return <div className="form">
          <lable for={props.for} className="form-lable">
            {props.name}
          </lable>
          <input type={props.type} className="form-control" id={props.for}></input>
  </div>;
};

export default Form;
