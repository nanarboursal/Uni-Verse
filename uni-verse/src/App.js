import './App.css';
import Homepage from './Components/Home/Homepage';
import Button from './Buttons.js';
import React from 'react';
import { Route } from 'react-router-dom';
function App() {
  return (
    <>
      <React.Fragment>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/questions" component={Button} />
      </React.Fragment>
      <div className="App">
        {/* <Homepage /> */}
      </div>
    </>
  );
}

export default App;
