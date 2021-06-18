import React, { Component } from "react";
import "../../App.css";
import rightImg from "../../assets/sign.jpg";
import Input from "../common/input";

class Signin extends Component {
  state = {
    account: { email: "", password: "" },
  };

  handleSubmit = (e) => {
    e.preventDefault();

    console.log("Submitter");
  };

  handleChange = ({ currentTarget: input }) => {
    const account = { ...this.state.account };
    account[input.name] = input.value;
    this.setState({ account });
  };

  render() {
    const { account } = this.state;

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
              />
              <Input
                name="password"
                value={account.password}
                label="Password"
                onChange={this.handleChange}
              />
              <button className="log-button">Login</button>
            </form>
          </div>
          <div className="column sign-col-img">
            <img className="img-sign" src={rightImg}></img>
          </div>
        </div>
      </>
    );
  }
}

export default Signin;
