// src/components/Navbar.js
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';

const NavbarContainer = styled.nav`
  background-color: #2a2a2a; /* Slightly lighter for elegance */
  padding: 1rem 3rem; /* Increased padding for a spacious feel */
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2); /* Shadow for depth */
`;

const Logo = styled.div`
  font-size: 1.8rem; /* Increased font size */
  font-weight: bold;
  color: #ffb703; /* Gold color for a posh touch */
  letter-spacing: 1px; /* Spacing for sophistication */
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05); /* Scale effect on hover */
  }
`;

const NavLinks = styled.div`
  display: flex; /* Ensure links are displayed in a row */

  a {
    margin-left: 30px; /* Increased margin for spacing */
    color: #fff;
    text-decoration: none;
    font-size: 1.1rem; /* Increased font size */
    font-weight: 500; /* Medium font weight */
    transition: color 0.3s ease, transform 0.3s ease, border-bottom 0.3s ease; /* Smooth transition effects */
    padding-bottom: 5px; /* Add padding for underline effect */

    &:hover {
      color: #ffb703; /* Highlight color on hover */
      transform: translateY(-2px); /* Lift effect on hover */
    }
  }

  .active {
    color: #ffb703; /* Gold color for active link */
    border-bottom: 3px solid #ffb703; /* Gold underline for active link */
    transform: translateY(2px); /* Adjust for underline positioning */
  }
`;

const Navbar = () => {
  const location = useLocation(); // Get current route path

  return (
    <NavbarContainer>
      <Logo>John Mwaura Portfolio</Logo>
      <NavLinks>
        <Link to="/" className={location.pathname === '/' ? 'active' : ''}>
          Home
        </Link>
        <Link to="/about" className={location.pathname === '/about' ? 'active' : ''}>
          About
        </Link>
        <Link to="/projects" className={location.pathname === '/projects' ? 'active' : ''}>
          Projects
        </Link>
        <Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''}>
          Contact
        </Link>
      </NavLinks>
    </NavbarContainer>
  );
};

export default Navbar;
