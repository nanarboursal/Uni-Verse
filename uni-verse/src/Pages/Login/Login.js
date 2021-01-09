import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { compose } from "recompose";

import { withFirebase } from "../../Components/Firebase";
import * as ROUTES from "../../constants/routes";
import NavBar from "../../Components/Navigation/Navbar";
import "./Login.css";
import signinpic from "./signinpic.jpg";

const SignInPage = () => (
  <div>
    <SignInForm />
  </div>
);

const INITIAL_STATE = {
  email: "",
  password: "",
  error: null
};

class SignInFormBase extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = event => {
    const { email, password } = this.state;

    this.props.firebase
      .doSignInWithEmailAndPassword(email, password)
      .then(() => {
        this.setState({ ...INITIAL_STATE });
        this.props.history.push(ROUTES.HOMEPAGE);
      })
      .catch(error => {
        this.setState({ error });
      });

    event.preventDefault();
  };

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { email, password, error } = this.state;

    const isInvalid = password === "" || email === "";

    return (
      <div>
        <NavBar />
        <header className="sign-in-page">
          <img className="signin-image" src={signinpic} alt="signin-img"></img>
        </header>
        <form className="signup-page" onSubmit={this.onSubmit}>
          <input
            name="email"
            value={email}
            onChange={this.onChange}
            type="text"
            placeholder="Email Address"
            className="input-box"
          />
          <input
            name="password"
            value={password}
            onChange={this.onChange}
            type="password"
            placeholder="Password"
            className="input-box"
          />
          <button disabled={isInvalid} type="submit">
            Sign In
          </button>

          {error && <p>{error.message}</p>}
          <p style={{marginTop: 10}}>
            Don't have an account? <Link style={{color: "blue"}} to={ROUTES.SIGNUP}>Sign Up</Link>
          </p>
        </form>
      </div>
    );
  }
}

const SignInForm = compose(withRouter, withFirebase)(SignInFormBase);

export default SignInPage;

export { SignInForm };
