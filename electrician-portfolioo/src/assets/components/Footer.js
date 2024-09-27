// src/components/Footer.js
import React from 'react';
import styled from 'styled-components';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGithub } from 'react-icons/fa';

const FooterContainer = styled.footer`
  background-color: #1e1e1e;
  padding: 2rem 1rem; /* Increased padding for a more substantial footer */
  text-align: center;
  color: #fff;
  position: relative; /* Changed to relative for a flexible layout */
  width: 100%;
  box-shadow: 0 -4px 10px rgba(0, 0, 0, 0.2); /* Subtle shadow for depth */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const SocialIcons = styled.div`
  margin: 10px 0; /* Spacing around icons */
  display: flex;
  gap: 15px; /* Spacing between icons */
`;

const Icon = styled.a`
  color: #fff;
  font-size: 1.2rem; /* Slightly larger icons */
  transition: color 0.3s ease, transform 0.3s ease;

  &:hover {
    color: #ffb703; /* Gold highlight on hover */
    transform: scale(1.2); /* Scale up on hover */
  }
`;

const FooterText = styled.p`
  margin: 10px 0 0;
  font-size: 0.9rem; /* Slightly smaller text */
  font-family: 'Great Vibes', cursive; /* Elegant font */
  color: #ffb703; /* Gold color for a fancy look */
  letter-spacing: 0.5px;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <SocialIcons>
        <Icon href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <FaFacebookF />
        </Icon>
        <Icon href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <FaTwitter />
        </Icon>
        <Icon href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
          <FaLinkedinIn />
        </Icon>
        <Icon href="https://github.com" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </Icon>
      </SocialIcons>
      <FooterText>&copy; 2024 John Mwaura Portfolio | All Rights Reserved</FooterText>
    </FooterContainer>
  );
};

export default Footer;
