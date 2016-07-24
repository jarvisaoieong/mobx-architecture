import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'mobx-react';
import DevTools from 'mobx-react-devtools';
import {store} from 'modules/app';

const render = () => {
  const {Component: App} = require('modules/app');
  ReactDOM.render(
    <div>
      <Provider {...store} >
        <App />
      </Provider>
      <DevTools />
    </div>
  ,
    document.getElementById('app')
  );
}

render();

if (process.env.NODE_ENV === 'development' && module.hot) {
  module.hot.accept('modules/app', () => {
    render();
  });
}
