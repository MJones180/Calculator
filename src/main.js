import React from 'react';
import ReactDOM from 'react-dom';

// =================================
// Render Setup
// =================================
const MOUNT_NODE = document.getElementById('root');

const renderApp = () => {
  const App = require('./app').default;
  ReactDOM.render(<App />, MOUNT_NODE);
};

// =================================
// Hot Module Replacement - Dev Only
// =================================
if (__DEV__ && module.hot) {
  module.hot.accept('./app', () =>
    setImmediate(() => {
      ReactDOM.unmountComponentAtNode(MOUNT_NODE);
      renderApp();
    })
  );
}

// =================================
// Render App
// =================================
renderApp();
