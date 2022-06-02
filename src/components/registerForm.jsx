import React, { Component } from "react";
import Joi from "joi-browser";
import Input from "./common/input";
import Form from "./common/form";
import Radio from "./common/radio";

class Register extends Form {
  state = {
    data: { name: "", email: "", password: "", role: "common" },
    errors: {},
  };
  schema = {
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().required(),
    role: Joi.string().required(),
  };

  doSubmit() {
    //call the server
    console.log("submitted");
  }

  render() {
    const { data, errors } = this.state;
    return (
      <div>
        <h1>Regitser</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <Input
              value={data.name}
              onChange={this.handleChange}
              name="name"
              label="Name:"
              error={errors.name}
            />
            <Input
              value={data.email}
              onChange={this.handleChange}
              name="email"
              label="Email:"
              error={errors.email}
            />
            <Input
              value={data.password}
              onChange={this.handleChange}
              name="password"
              label="Password:"
              error={errors.password}
            />
            <div className="radio" onChange={this.handleRadioChange}>
              <Radio
                name="admin"
                value="admin"
                label="Admin User"
                checked={data.role === "admin"}
              />
              <Radio
                name="common"
                value="common"
                label="Common User"
                checked={data.role === "common"}
              />
            </div>
          </div>

          <button
            className="btn btn-primary my-2"
            disabled={this.validateForm()}
          >
            Register
          </button>
        </form>
      </div>
    );
  }
}

export default Register;
