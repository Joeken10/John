// src/pages/Home.js
import React from 'react';
import styled, { keyframes } from 'styled-components';
import heroImage from '../assets/joe.jpg'; // Import the image

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const HeroSection = styled.section`
  height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  text-align: center;
  background-color: #4a90e2; /* Solid color background */
  position: relative;
  overflow: hidden;
`;

const HeroText = styled.div`
  background-color: rgba(0, 0, 0, 0.7); /* Darker background for contrast */
  padding: 40px;
  border-radius: 15px; /* Rounded corners for a softer look */
  display: inline-block;
  margin-top: 80px;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.7); /* Shadow for depth */
  animation: ${fadeIn} 0.8s ease-in-out; /* Fade-in effect */
`;

const ProfileImage = styled.img`
  width: 120px; /* Adjust size as needed */
  height: 120px; /* Adjust size as needed */
  border-radius: 50%;
  border: 3px solid #ffb703; /* Gold border for a classy touch */
  position: absolute;
  top: 20px; /* Position the image */
  left: 50%;
  transform: translateX(-50%);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5); /* Shadow for depth */
`;

const LocationText = styled.div`
  margin-top: 20px; /* Space between workshop location and other text */
  font-size: 1.1rem; /* Slightly larger for emphasis */
  color: #ffb703; /* Gold color for visibility */
`;

const Button = styled.a`
  display: inline-block;
  padding: 15px 30px;
  margin-top: 20px;
  background-color: #ffb703; /* Gold color for the button */
  color: #1c1c1c; /* Dark text color for contrast */
  border-radius: 5px;
  text-decoration: none;
  font-weight: bold;
  transition: background-color 0.3s ease, transform 0.3s ease;

  &:hover {
    background-color: #e0a200; /* Darker gold on hover */
    transform: translateY(-2px); /* Slight lift effect */
  }
`;

const Home = () => {
  return (
    <HeroSection>
      <ProfileImage src={heroImage} alt="John Mwaura" /> {/* Add the circular image */}
      <HeroText>
        <h1 style={{ margin: 0 }}>John Mwaura</h1>
        <h2 style={{ margin: '10px 0' }}>Electrician & Sound Engineer</h2>
        <p>Bringing sound to life, and light to every corner!</p>
        <LocationText>
          <strong>Workshop Location:</strong> 123 Main Street, Hometown, State, ZIP
        </LocationText>
        <Button href="#contact">Get in Touch</Button> {/* Call to action button */}
      </HeroText>
    </HeroSection>
  );
};

export default Home;
