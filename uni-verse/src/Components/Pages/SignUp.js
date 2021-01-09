import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { compose } from "recompose";
import Images from '../../Components/Images';

import { withFirebase } from "../../Components/Firebase";
import * as ROUTES from "../../constants/routes";
import NavBar from "../../Components/Navigation/Navbar";
import signup from "./signuppic.jpg"
import Questions from '../../Buttons';
import "./SignUp.css";

const SignUpPage = () => (
    <div>
        <SignUpForm />
    </div>
);

const INITIAL_STATE = {
    email: "",
    passwordOne: "",
    passwordTwo: "",
    error: null
};

class SignUpFormBase extends Component {
    constructor(props) {
        super(props);

        this.state = { ...INITIAL_STATE };
    }

    onSubmit = event => {
        const { email, passwordOne } = this.state;

        this.props.firebase
            .doCreateUserWithEmailAndPassword(email, passwordOne)
            .then(authUser => {
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
        const { username, email, passwordOne, passwordTwo, error } = this.state;

        const isInvalid =
            passwordOne !== passwordTwo ||
            passwordOne === "" ||
            email === "" ||
            username === "";

        return (
            <div>
                <NavBar></NavBar>
                <header className="sign-up-page">
                    <img className="signup-image" src={signup} alt="signup-img"></img>
                </header>
                <form className="signup-page" onSubmit={this.onSubmit}>
                    <input
                        name="username"
                        value={username}
                        onChange={this.onChange}
                        type="text"
                        placeholder="Full Name"
                        className="input-box"
                    />
                    <input
                        name="email"
                        value={email}
                        onChange={this.onChange}
                        type="text"
                        placeholder="Email Address"
                        className="input-box"
                    />
                    <input
                        name="passwordOne"
                        value={passwordOne}
                        onChange={this.onChange}
                        type="password"
                        placeholder="Password"
                        className="input-box"
                    />
                    <input
                        name="passwordTwo"
                        value={passwordTwo}
                        onChange={this.onChange}
                        type="password"
                        placeholder="Confirm Password"
                        className="input-box"
                    />
                    <Images />

                    <Questions />

                    <button disabled={isInvalid} type="submit">
                        Sign Up
          </button>

                    {error && <p>{error.message}</p>}
                </form>
            </div>
        );
    }
}

const SignUpForm = compose(withRouter, withFirebase)(SignUpFormBase);

export default SignUpPage;

export { SignUpForm };