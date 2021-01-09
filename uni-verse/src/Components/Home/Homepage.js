import React, { Component } from "react";
import "../Home/Homepage.scss";
import logo2 from "./logo2.png";
import { Link, BrowserRouter as Router } from "react-router-dom";
import * as ROUTES from "../../constants/routes";
import { AuthUserContext } from "../Session";

export default class Homepage extends Component {
  render() {
    return (
      <>
        <Router></Router>
        <div class="container">
          <div class="bird-container bird-container--one">
            <div class="bird bird--one"></div>
          </div>

          <div class="bird-container bird-container--two">
            <div class="bird bird--two"></div>
          </div>

          <div class="bird-container bird-container--three">
            <div class="bird bird--three"></div>
          </div>

          <div class="bird-container bird-container--four">
            <div class="bird bird--four"></div>
          </div>
          <img src={logo2} alt="Logo" className="center" />
        </div>

        <div className="banner-text">
          <p className="lead text-center">
            {" "}
            Make new friends in your university based on interests, majors, and
            similar classes. Time to make your college experience memorable!
          </p>
          <AuthUserContext>
            {authUser =>
              authUser ? (
                <p>Welcome!</p>
              ) : (
                <React.Fragment>
                  <Link className="sign-up" to={ROUTES.SIGNUP}>
                    Sign Up Now!
                  </Link>
                  <p className="log-in-link" >Already have an account? <Link style={{color: "blue"}} to={ROUTES.SIGNIN}>Log In.</Link></p>
                </React.Fragment>
              )
            }
          </AuthUserContext>
        </div>
      </>
    );
  }
}
