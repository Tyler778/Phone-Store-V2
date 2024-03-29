import React, { Component } from 'react'

//Import Logo as logo 
import logo from '../logo.svg'

//Router
import {Link} from 'react-router-dom'

//Styled Components
import {ButtonContainer} from './StyledComponents/Button'
import {NavWrapper} from './StyledComponents/NavWrapper'

export default class Navbar extends Component {
  render() {
    return (
      <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5">
        <Link to="/">
        <img src={logo} alt="store" className="navbar-brand"/>
        </Link>
      <ul className="navbar-nav align-items-center">
        <li className="nav-item ml-5">
          <Link to="/" className="nav-link">
          Products
          </Link>
        </li>
      </ul>
        <Link to="/cart" className="ml-auto">
        <ButtonContainer>
          <span className="mr-2">
          <i className="fas fa-cart-plus"/>
          </span>
          My Cart
          </ButtonContainer>
        </Link>
      </NavWrapper>
    )
  }
}
