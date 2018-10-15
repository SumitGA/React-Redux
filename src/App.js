import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import './App.css';

const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Main Page</h1>
      </div>
    </Provider>
  );
};

export default App;
