import React, { Component } from "react";
import "../../App.css";
import rightImg from "../../assets/sign.jpg";
import Input from "../common/input";

class Signin extends Component {
  state = {
    account: { email: "", password: "" },
    errors: {},
  };

  validate = () => {
    const errors = {};

    const { account } = this.state;
    if (account.email.trim() === "") {
      errors.email = "Username is required";
    }
    if (account.password.trim() === "") {
      errors.password = "Password is required";
    }

    return Object.keys(errors).length === 0 ? null : errors;
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const errors = this.validate();
    console.log(errors);
    this.setState({ errors: errors || {} });
    if (errors) return;

    console.log(this.state.account);
  };

  handleChange = ({ currentTarget: input }) => {
    const account = { ...this.state.account };
    account[input.name] = input.value;
    this.setState({ account });
  };

  render() {
    const { account, errors } = this.state;

    return (
      <>
        <div className="row">
          <div className="column login-form">
            <form
              onSubmit={this.handleSubmit}
              className="flex flex-col h-screen justify-center items-center space-y-3"
            >
              <Input
                name="email"
                value={account.email}
                label="Email"
                onChange={this.handleChange}
                error={errors.email}
              />
              <Input
                name="password"
                value={account.password}
                label="Password"
                onChange={this.handleChange}
                error={errors.password}
              />

              <button className="log-button">Login</button>
            </form>
          </div>
          <div className="column sign-col-img">
            <img className="img-sign" alt="yoga-boy" src={rightImg}></img>
          </div>
        </div>
      </>
    );
  }
}

export default Signin;
