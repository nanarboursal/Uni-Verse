import React, { Component } from "react";
import "./Matches.css";

import matchesPic from "./matches.jpg";

import "react-slideshow-image/dist/styles.css";
import { Slide } from "react-slideshow-image";

var matches = require("../../CreateUserData/matches.json");

export class Matches extends Component {

  render() {
    let allMatches = matches.matchList.map(person => {
      return (
        <div className="each-slide">
          <img className="person-image" alt="pic" src={person.url}></img>
          {/* <img className="person-image" alt="pic" src={surabhi}></img> */}
          <br></br>
          <span className="person-name">{person.name}</span>
          <br></br>
          <span className="person-major">{person.userMajor}</span>
          <br></br>
          <span className="person-email">{person.email}</span>
          <br></br>
          <span className="person-bio">{person.bio}</span>
        </div>
      );
    });

    return (
      <div>
        <header className="matches-page">
          <img
            className="matches-image"
            src={matchesPic}
            alt="matches-img"
          ></img>
        </header>
        <div className="match-es-page"></div>
        <div className="slide-container slide-con">
          <Slide>{allMatches}</Slide>
        </div>
      </div>
    );
  }
}
