import React, { Component } from "react";
import "../Home/Homepage.scss";
import logo2 from "./logo2.png";
import { Link, BrowserRouter as Router } from "react-router-dom";
import * as ROUTES from "../../constants/routes";
import { AuthUserContext } from "../Session";
import CreatorCard from "./CreatorCard";
import nanar from "./nanar.jpeg";
import seema from "./seema.jpg";
import surabhi from "./surabhi.png";

export default class Homepage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      creators: [
        {
          name: "Nanar Boursalian",
          Linkedin: "https://www.linkedin.com/in/nanarboursalian/",
          pic: nanar
        },
        {
          name: "Seema Vora",
          Linkedin: "https://www.linkedin.com/in/seemasvora/",
          pic: seema
        },
        {
          name: "Surabhi Gupta",
          Linkedin: "https://www.linkedin.com/in/gupta-surabhi/",
          pic: surabhi
        }
      ]
    };
  }

  render() {
    let creatorCards = this.state.creators.map(creators => {
      return (
        <li className="flex-item">
          <CreatorCard creators={creators} />
        </li>
      )
    })
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
                  <p className="log-in-link">
                    Already have an account?{" "}
                    <Link style={{ color: "blue" }} to={ROUTES.SIGNIN}>
                      Log In.
                    </Link>
                  </p>
                </React.Fragment>
              )
            }
          </AuthUserContext>
        </div>
        <div className="creators-box">
          <h1>Meet the Creators!</h1>
          <ul className="flex-container wrap-reversez">
            {creatorCards}
          </ul>
        </div>
      </>
    );
  }
}
