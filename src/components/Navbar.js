import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import logo from '../logo.svg'
import { Nav } from 'react-bootstrap';
import {ButtonContainer} from '../components/Button';
import styled from "styled-components";
class Navbar extends Component {
    render() {
        return (
            <NavWrapper className="navbar navbar-expand-sm  navbar-dark px-sm-5">

            <Link to="/contact">
              <img src={logo} alt="store" className="navbar-brand" />
            </Link>
            <ul className="navbar-nav align-items-center">
              <li className="nav-item ml-5">
                <Link to="/" className="nav-link">
                Home
                </Link>
              </li>
            </ul>
            <Link to='/cart' className='ml-auto'>
                <ButtonContainer>
                  <span className="mr-2">
                   <i className="fas fa-cart-plus"/>
                  </span>
                  Your favorite list
                </ButtonContainer>
            </Link>
          </NavWrapper>
        );
    }
}
const NavWrapper = styled.nav`
  background: var(--mainBlue);
  .nav-link {
    color: var(--mainWhite) !important;
    font-size:1.3rem;
    text-transform:capitalize;
  }
  @media (max-width: 576px) {
    .navbar-nav {
      flex-direction: row !important;
`;

export default Navbar;
