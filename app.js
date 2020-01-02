import React from 'react'
import ReactDom from 'react-dom'
import App from './src/views/App'
import store from './src/store';
import { Provider } from 'react-redux';

ReactDom.render(<Provider store={store}>
  <App />
</Provider>
, document.getElementById('app'));