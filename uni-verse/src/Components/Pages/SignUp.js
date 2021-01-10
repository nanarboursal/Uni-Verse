import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { compose } from "recompose";
import { writeUserInformation } from "../Firebase/firebase";
import { withFirebase } from "../Firebase";
import Images, { FileUpload } from '../../Components/Images';
import { useState } from 'react';
import { storage } from '../Firebase/firebase';

import * as ROUTES from "../../constants/routes";
import signup from "./signuppic.jpg";
import { Container, Row, Col } from "reactstrap";
import "./SignUp.css";

const SignUpPage = () => (
    <div>
        <SignUpForm />
    </div>
);




class SignUpFormBase extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            passwordOne: "",
            passwordTwo: "",
            error: null,
            username: "",
            usermajor: "",
            gender: "",
            social: "",
            major: "",
            hobby: "",
            bio: "",
            smoke: "",
            gamer: "",
            url: "",
            image: "",
            progress: "",
        };
    }

    onSubmit = event => {
        event.preventDefault();
        const {
            email,
            passwordOne,
            username,
            usermajor,
            gender,
            social,
            major,
            hobby,
            bio,
            smoke,
            gamer,
            url,
        } = this.state;
        let ref = "users/" + username;
        let obj = {
            email,
            passwordOne,
            usermajor,
            gender,
            social,
            major,
            hobby,
            bio,
            smoke,
            gamer,
            url,
        };

        writeUserInformation(ref, obj);

        this.props.firebase
            .doCreateUserWithEmailAndPassword(email, passwordOne)
            .then(authUser => {
                this.setState({
                    email: "",
                    passwordOne: "",
                    passwordTwo: "",
                    error: null,
                    username: "",
                    usermajor: "",
                    gender: "",
                    social: "",
                    major: "",
                    hobby: "",
                    bio: "",
                    smoke: "",
                    gamer: "",
                    url: "",
                });
                this.props.history.push(ROUTES.MATCHES);
            })
            .catch(error => {
                this.setState({ error });
            });
            
    };

    onChange = event => {
        event.preventDefault();
        this.setState({ [event.target.name]: event.target.value });
    };

    handleChange = e => {
        if (e.target.files[0]) {
            (this.setState({
                image: e.target.files[0]
            })
            );
        }
        const uploadTask = storage.ref(`images/${this.state.image.name}`).put(this.state.image);
        uploadTask.on(
            "state_changed",
            snapshot => {
                const progress = Math.round(
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                );
                (this.setState({
                    progress: progress
                })
                );
            },
            error => {
                // console.log(error);
            },
            () => {
                storage
                    .ref("images")
                    .child(this.state.image.name)
                    .getDownloadURL()
                    .then(url => {
                        // console.log(url);
                        (this.setState({
                            url: url
                        })
                        );
                    });
            }
        );
    };

    handleUpload = () => {
        const uploadTask = storage.ref(`images/${this.state.image.name}`).put(this.state.image);
        uploadTask.on(
            "state_changed",
            snapshot => {
                const progress = Math.round(
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                );
                (this.setState({
                    progress: progress
                })
                );
            },
            error => {
                // console.log(error);
            },
            () => {
                storage
                    .ref("images")
                    .child(this.state.image.name)
                    .getDownloadURL()
                    .then(url => {
                        // console.log(url);
                        (this.setState({
                            url: url
                        })
                        );
                    });
            }
        );

    };
    render() {
        const { username, email, passwordOne, passwordTwo, error } = this.state;

        const isInvalid =
            passwordOne !== passwordTwo ||
            passwordOne === "" ||
            email === "" ||
            username === "" ||
            passwordOne.length < 6;

    return (
      <div>
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
          <div className="welcome-container">
            <h2>
              Tell us more about yourself to find some new friends from your
              university!
            </h2>
                    </div>

                    <div className="background-container">
                        <Row>
                            <Col>
                                <br />
                                <div>
                                    Your major {"  "}
                                    <input
                                        type="text"
                                        name="usermajor"
                                        onChange={this.onChange}
                                        className="boxInput"
                                    />{" "}
                                    {"  "}
                                </div>
                                <br />
                                <div>
                                    More about yourself {"  "}
                                    <input
                                        type="text"
                                        name="bio"
                                        onChange={this.onChange}
                                        className="boxInput"
                                    />{" "}
                                    {"  "}
                                </div>
                                <br />
                                <Col>
                                    <div>
                                        <Col className="title-styles">Your Gender {"  "}</Col>
                                        <Col>
                                            <button
                                                type="submit"
                                                name="gender"
                                                value="male"
                                                onClick={this.onChange}
                                            >
                                                Male
                      </button>
                                            {"  "}
                                            <button
                                                type="submit"
                                                name="gender"
                                                value="female"
                                                onClick={this.onChange}
                                            >
                                                Female
                      </button>
                                        </Col>
                                    </div>
                                </Col>
                                <div className="block-space"></div>
                                <div className="subcontainer-styles">
                                    Social Personality
                  <Col>
                                        <button
                                            type="submit"
                                            name="social"
                                            value="outgoing"
                                            onClick={this.onChange}
                                        >
                                            Outgoing
                    </button>
                                        {"  "}
                                        <button
                                            type="submit"
                                            name="social"
                                            value="homebody"
                                            onClick={this.onChange}
                                        >
                                            Homebody
                    </button>
                                    </Col>
                                </div>
                                <div className="block-space"></div>
                                <div className="subcontainer-styles">
                                    Social smoker and/or drinker?
                  <Col>
                                        <button
                                            type="submit"
                                            name="smoke"
                                            value="yes smoker/drinker"
                                            onClick={this.onChange}
                                        >
                                            Yeaa!
                    </button>
                                        {"  "}
                                        <button
                                            type="submit"
                                            name="smoke"
                                            value="no smoker/drinker"
                                            onClick={this.onChange}
                                        >
                                            Nope!
                    </button>
                                    </Col>
                                </div>
                                <div className="block-space"></div>
                                <div className="subcontainer-styles">
                                    Match your major?
                  <Col>
                                        <button
                                            type="submit"
                                            name="major"
                                            value="yes major"
                                            onClick={this.onChange}
                                        >
                                            Yes
                    </button>
                                        {"  "}
                                        <button
                                            type="submit"
                                            name="major"
                                            value="no major"
                                            onClick={this.onChange}
                                        >
                                            No
                    </button>
                                    </Col>
                                </div>
                                <div className="block-space"></div>
                                <div className="subcontainer-styles">
                                    Hobbies
                  <Col>
                                        <button
                                            type="submit"
                                            name="hobby"
                                            value="arts"
                                            onClick={this.onChange}
                                        >
                                            Arts
                    </button>
                                        {"  "}
                                        <button
                                            type="submit"
                                            name="hobby"
                                            value="workout"
                                            onClick={this.onChange}
                                        >
                                            Workout
                    </button>
                                        {"  "}
                                        <button
                                            type="submit"
                                            name="hobby"
                                            value="outdoor adventures"
                                            onClick={this.onChange}
                                        >
                                            Outdoor Adventures
                    </button>
                                        {"  "}
                                        <button
                                            type="submit"
                                            name="hobby"
                                            value="music"
                                            onClick={this.onChange}
                                        >
                                            Music
                    </button>
                                    </Col>
                                </div>
                                <div className="block-space"></div>
                                <div className="subcontainer-styles">
                                    Gamer?
                  <Col>
                                        <button
                                            type="submit"
                                            name="gamer"
                                            value="yes gamer"
                                            onClick={this.onChange}
                                        >
                                            Yes
                    </button>
                                        {"  "}
                                        <button
                                            type="submit"
                                            name="gamer"
                                            value="no gamer"
                                            onClick={this.onChange}
                                        >
                                            No
                    </button>
                  </Col>
                </div>
              </Col>
            </Row>
            <br />
            <Container className="complete-contain">
              <Row>
                <Col>
                  <Row>
                    <Col className="top-lab">
                      Here's what you selected.{" "}
                    </Col>
                  </Row>
                  <Row className="labelz">
                    <Col >Name:</Col>
                    <Col>{this.state.username}</Col>
                  </Row>
                  <Row className="labelz">
                    <Col>Major:</Col>
                    <Col>{this.state.usermajor}</Col>
                  </Row>
                  <Row className="labelz">
                    <Col>Bio:</Col>
                    <Col>{this.state.bio}</Col>
                  </Row>
                  <Row className="labelz">
                    <Col>Gender:</Col>
                    <Col>{this.state.gender}</Col>
                  </Row>
                  <Row className="labelz">
                    <Col>Personality:</Col>
                    <Col>{this.state.social}</Col>
                  </Row>
                  <Row className="labelz">
                    <Col>Substances:</Col>
                    <Col>{this.state.smoke}</Col>
                  </Row>
                  <Row className="labelz">
                    <Col>Match major:</Col>
                    <Col>{this.state.major}</Col>
                  </Row>
                  <Row className="labelz">
                    <Col>Hobbies:</Col>
                    <Col>{this.state.hobby}</Col>
                  </Row>
                  <Row className="labelz">
                    <Col>Gamer:</Col>
                    <Col>{this.state.gamer}</Col>
                  </Row>
                </Col>
              </Row>
            </Container>
          </div>

          <button className="sub-but" disabled={isInvalid} type="submit">
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
