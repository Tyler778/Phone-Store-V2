import React, { Component } from 'react';
import './App.css';
//Bootstrap imported
import 'bootstrap/dist/css/bootstrap.min.css'

//Basic Imports of Components
import Navbar from './Components/Navbar'
import ProductList from './Components/ProductList'
import Details from './Components/Details'
import Cart from './Components/Cart'
import Default from './Components/Default'

//Router
import {Switch, Route} from 'react-router-dom'




class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Switch>
          {/*Exact is necessary for properly rendering components*/}
          <Route exact path="/" component={ProductList}/>
          <Route path="/details" component={Details}/>
          <Route path="/cart" component={Cart}/>
          <Route component={Default}/>
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
