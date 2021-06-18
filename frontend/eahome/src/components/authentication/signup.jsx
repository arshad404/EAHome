import React, { Component } from "react";
import "../../App.css";
import rightImg from "../../assets/sign.jpg";
import Input from "../common/input";

class Signup extends Component {
  state = {
    account: {
      email: "",
      password: "",
      password2: "",
      trainer: false,
    },
    errors: {},
  };

  isEmail(val) {
    let regEmail =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (regEmail.test(val)) {
      return true;
    }
    return false;
  }

  validate = () => {
    const errors = {};

    const { account } = this.state;
    if (account.email.trim() === "") {
      errors.email = "Email is required";
    }
    if (!this.isEmail(account.email)) {
      errors.email = "Enter a valid email address";
    }
    if (account.password.trim() === "") {
      errors.password = "Password is required";
    }
    if (account.password2.trim() === "") {
      errors.password2 = "Password is required";
    }
    if (account.password2.trim() !== account.password.trim()) {
      errors.password2 = "Password should match";
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
    if (input.name === "trainer") {
      account[input.name] = !this.state.account.trainer;
    } else {
      account[input.name] = input.value;
    }
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
              <Input
                name="password2"
                value={account.password2}
                label="Password"
                onChange={this.handleChange}
                placeholder={"type again"}
                error={errors.password2}
              />

              <label htmlFor="trainer">
                <input
                  type="checkbox"
                  label="trainer"
                  name="trainer"
                  value={account.trainer}
                  defaultChecked={this.state.account.trainer}
                  onChange={this.handleChange}
                />
                <span className="px-2">Are you Trainer</span>
              </label>

              <button className="log-button">Signup</button>
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

export default Signup;
