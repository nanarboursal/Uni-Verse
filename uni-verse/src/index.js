  
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';
<<<<<<< HEAD
import Firebase, { FirebaseContext } from '../src/Components/Firebase';

ReactDOM.render(
  <FirebaseContext.Provider value={new Firebase()}>
    <App />
  </FirebaseContext.Provider>,
  document.getElementById('root'),
=======

ReactDOM.render(
    <App />,
    
  document.getElementById('root')
>>>>>>> 1c4da088d06b16dbf140d0a57b14c462c694cf02
);
