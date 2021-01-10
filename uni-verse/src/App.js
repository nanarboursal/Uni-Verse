import "./App.css";
import Homepage from "./Components/Home/Homepage";
// import Button from "./Buttons.js";
import Login from "./Components/Pages/Login";
import SignUp from "./Components/Pages/SignUp";
import NavBar from "./Components/Navigation/Navbar";
import React, { Component } from "react";
import * as ROUTES from "./constants/routes";
import { Route } from "react-router-dom";
import { withAuthentication } from "./Components/Session";
import { Matches } from "./Components/Matches/Matches";

// function App() {
//   return (
//     <>
//       <React.Fragment>
//         <Route exact path="/" component={Homepage} />
//         <Route exact path={ROUTES.SIGNIN} component={Login}></Route>
//         <Route exact path={ROUTES.SIGNUP} component={SignUp}></Route>
//       </React.Fragment>
//     </>
//   );
// }

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      authUser: null
    };
  }
  render() {
    return (
      <React.Fragment>
        <NavBar></NavBar>
        <Route exact path="/" component={Homepage} />
        <Route exact path={ROUTES.SIGNIN} component={Login}></Route>
        <Route exact path={ROUTES.SIGNUP} component={SignUp}></Route>
        <Route exact path={ROUTES.MATCHES} component={Matches}></Route>
      </React.Fragment>
    );
  }
}

export default withAuthentication(App);
