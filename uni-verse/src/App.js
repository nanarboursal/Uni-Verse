import './App.css';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

import Homepage from './Components/Home/Homepage';
import SignUpPage from "./Pages/SignUp/SignUp";
import SignInPage from "./Pages/Login/Login";
import Button from './Buttons.js';

import * as ROUTES from './constants/routes';
import "./App.css";

function App() {
  return (
    <Router>
    <div>
      <Route exact path={ROUTES.HOMEPAGE} component={Homepage} />
      <Route exact path={ROUTES.SIGNUP} component={SignUpPage} />
      <Route exact path={ROUTES.SIGNIN} component={SignInPage} />
      <Route exact path="/questions" component={Button} />
    </div>
  </Router>
  );
}

export default App;
