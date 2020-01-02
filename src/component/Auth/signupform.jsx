import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import BackendServices from "../BCSerivces/BackendServices";
const detials = {
  first_name: "",
  last_name: "",
  email_id: "",
  password: "",
  user_name: "",
  contact_number: ""
};

const Signupform = () => {
  const [getd, setd] = useState({ ...detials });

  const setdata = e => {
    setd({ ...getd, [e.target.name]: e.target.value });
  };

  const disp = () => {
    console.log(getd);
    BackendServices.signup(getd).then(response => {
      console.log(response);
    });
  };
  return (
    <React.Fragment id="scrol">
      <div className="container mt-4">
        <div className="row">
          <div className="col-12 mt-5"></div>
          <div className="col-12">
            <h5 className="grey-text text-darken-3">Sign Up</h5>
          </div>
          <div className="input-field col-6">
            <label htmlFor="fname">
              <b>First Name</b>
            </label>
            <input
              type="text"
              name="first_name"
              className="input-group"
              value={getd.first_name}
              onChange={setdata}
            />
          </div>
          <div className="input-field col-6">
            <label htmlFor="lname">
              <b>Last Name</b>
            </label>
            <input
              type="text"
              name="last_name"
              className="input-group"
              value={getd.last_name}
              onChange={setdata}
            />
          </div>
          <div className="input-field col-12 mt-2">
            <label htmlFor="email">
              <b>Email</b>
            </label>
            <input
              type="email"
              name="email_id"
              className="input-group"
              value={getd.email_id}
              onChange={setdata}
            />
          </div>
          <div className="input-field col-12 mt-2">
            <label htmlFor="username">
              <b>User Name</b>
            </label>
            <input
              type="text"
              name="user_name"
              className="input-group"
              value={getd.user_name}
              onChange={setdata}
            />
          </div>
          <div className="input-field col-6 mt-2">
            <label htmlFor="password">
              <b>Password</b>
            </label>
            <input
              type="password"
              name="password"
              className="input-group"
              value={getd.password}
              onChange={setdata}
            />
          </div>
          <div className="input-field col-6 mt-2">
            <label htmlFor="password">
              <b>Confirm Password</b>
            </label>
            <input
              type="password"
              id="password"
              className="input-group"
              value={getd.password}
              onChange={setdata}
            />
          </div>
          <div className="input-field col-12 mt-2">
            <label htmlFor="contactnum">
              <b>Contact Number</b>
            </label>
            <input
              type="text"
              name="contact_number"
              className="input-group"
              value={getd.contact_number}
              onChange={setdata}
            />
          </div>
          <div className="input-group col-12 mt-5 ">
            <div className="col-4"></div>
            <div className="col-4">
              <Button type="submit" onClick={disp} className="btn btn-primary">
                Submit
              </Button>
            </div>
            <div className="clo-4"></div>
          </div>
          <div className="col-12 mt-5"></div>
          <div className="col-12 mt-4"></div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Signupform;
