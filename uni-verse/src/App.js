import './App.css';
import Homepage from './Components/Home/Homepage';
import Button from './Buttons.js';
import Login from './Components/Pages/Login';
import SignUp from './Components/Pages/SignUp';

import React from 'react';
import * as ROUTES from './constants/routes';
import {		
    Route,	
  } from 'react-router-dom';	
  
  function App() {
  return (
    <>
      <React.Fragment>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/questions" component={Button} />
        <Route exact path={ROUTES.SIGNIN} component={Login}></Route>
        <Route exact path={ROUTES.SIGNUP} component={SignUp}></Route>

      </React.Fragment>
      <div className="App">
        {/* <Homepage /> */}
      </div>
    </>
  );
}

export default App;
// import {	
//   BrowserRouter as Router,	
//   Route,	
// } from 'react-router-dom';	

// import './App.css';
// import Login from './Components/Pages/Login';

// import * as ROUTES from './constants/routes';

// function App(){
//   return(
//     <Router>
//       <div>
//         <Route exact path={ROUTES.SIGNIN} componenet={Login}></Route>
//       </div>
//     </Router>
//   );
// }
// export default App;