import React, { Component } from "react";
import "./Matches.css";

import { Link } from "react-router-dom";
import * as ROUTES from "../../constants/routes";

import matchesPic from "./matches.jpg";

export class Matches extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <header className="matches-page">
          <img className="matches-image" src={matchesPic} alt="matches-img"></img>
        </header>
        <div className="match-es-page">

        </div>
      </div>
    );
  }
}
