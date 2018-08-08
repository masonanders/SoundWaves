import React from 'react';
import { Route, HashRouter } from 'react-router-dom';
import Splash from './splash/splash_container';
import App from './app';
import { Provider } from 'react-redux';



const Root = (props) => {
  let component;
  const loggedIn = () => props.store.getState().session.loggedIn;


  return (
    <Provider store={props.store}>
      <div>
        {loggedIn() ? (<App />) : (<Splash />)}
      </div>
    </Provider>
  );
};

export default Root;
