import React from 'react';
import { Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import Splash from './splash/splash_container';

const Root = (props) => {
  return (
    <Provider store={props.store}>
      <div>
        <Splash />
      </div>
    </Provider>
  );
};

export default Root;
