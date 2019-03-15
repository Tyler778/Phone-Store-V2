import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

//Router needs to encompass everything, so placed in index
import {BrowserRouter as Router} from 'react-router-dom'

//Context
import {ProductProvider} from './Components/Context API/context'

ReactDOM.render(
  <ProductProvider>
    <Router>
      <App />
    </Router>
  </ProductProvider>

, document.getElementById('root'));

serviceWorker.unregister();
