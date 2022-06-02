import React from "react";
import Joi from "joi-browser";
import Input from "./common/input";
import Form from "./common/form";

class Login extends Form {
  state = {
    data: { email: "", password: "" },
    errors: {},
  };
  schema = {
    email: Joi.string().email().required(),
    password: Joi.string().required(),
  };

  doSubmit() {
    //call the server
    console.log("submitted");
  }

  render() {
    const { data, errors } = this.state;
    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <Input
              value={data.email}
              onChange={this.handleChange}
              name="email"
              label="Email"
              error={errors.email}
            />
            <Input
              value={data.password}
              onChange={this.handleChange}
              name="password"
              label="Password"
              error={errors.password}
            />
          </div>
          <button className="btn btn-primary" disabled={this.validateForm()}>
            Login
          </button>
        </form>
      </div>
    );
  }
}

export default Login;
