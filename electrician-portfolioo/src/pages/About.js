import React, { useState } from 'react';
import styled from 'styled-components';
import '../App.css'; // Ensure CSS is imported

const cardColors = ['#ffeb3b', '#f44336', '#2196f3', '#4caf50']; // Example colors

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #f0f4f8; /* Light background for contrast */
  min-height: 100vh; /* Ensures it fills the viewport */
  font-family: 'Great Vibes', cursive; /* Set a fancy font for the entire container */

  @media (max-width: 768px) {
    padding: 10px;
  }
`;

const Card = styled.div`
  background-color: ${({ isOpen, index }) => (isOpen ? cardColors[index % cardColors.length] : '#ffffff')}; 
  color: #333; /* Dark text for readability */
  border-radius: 15px;
  padding: 30px; /* Increased padding for a larger look */
  margin: 20px;
  width: 400px; /* Increased width */
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15); /* Enhanced shadow effect */
  transition: transform 0.3s ease, box-shadow 0.3s ease, background-color 0.3s ease; /* Smooth background color transition */
  cursor: pointer;
  position: relative;
  overflow: hidden; /* Ensures content doesn't overflow card */

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3); /* More pronounced shadow on hover */
  }

  @media (max-width: 768px) {
    width: 90%; /* Full width on smaller devices */
  }
`;

const CardHeader = styled.h2`
  color: #ff6f61; /* Soft coral color */
  font-weight: 700; /* Bold header */
  font-size: 1.5rem; /* Increased font size for the header */
`;

const CardContent = styled.div`
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  max-height: 300px; /* Increased max height for content */
  overflow: hidden; /* Hide overflow for smoother animation */
  transition: max-height 0.3s ease;
  margin-top: 10px; /* Space between header and content */
`;

const FancyParagraph = styled.p`
  font-family: 'Great Vibes', cursive; /* Use the fancy font */
  font-size: 1.2rem; /* Larger font size */
  line-height: 1.5; /* Better line spacing */
  color: #555; /* Darker text for better readability */
`;

const ImageContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 20px;

  img {
    max-width: 100%;
    height: auto;
    border-radius: 10px; /* Optional styling for images */
  }
`;

const About = () => {
  const [openCard, setOpenCard] = useState(null); // To track which card is open

  const handleCardClick = (index) => {
    setOpenCard(openCard === index ? null : index); // Toggle card open/close
  };

  return (
    <Container>
      <h1 style={{ color: '#333', fontFamily: 'Great Vibes, cursive', fontSize: '2.5rem' }}>About Me</h1>
      <ImageContainer>
        <img src="../assets/your_image.jpg" alt="About Me" /> {/* Update the image source */}
      </ImageContainer>
      <Card onClick={() => handleCardClick(0)} isOpen={openCard === 0} index={0}>
        <CardHeader>Experience</CardHeader>
        <CardContent isOpen={openCard === 0}>
          <FancyParagraph>
            I am a professional electrician and sound engineer with over 10 years
            of experience. My expertise spans residential and commercial electrical installations,
            as well as managing audio equipment for live events.
          </FancyParagraph>
        </CardContent>
      </Card>
      <Card onClick={() => handleCardClick(1)} isOpen={openCard === 1} index={1}>
        <CardHeader>Skills</CardHeader>
        <CardContent isOpen={openCard === 1}>
          <ul>
            <li>Electrical Wiring & Installation</li>
            <li>Audio Mixing & Mastering</li>
            <li>Sound System Setup</li>
            <li>Equipment Troubleshooting</li>
            <li>Project Management</li>
          </ul>
        </CardContent>
      </Card>
      <Card onClick={() => handleCardClick(2)} isOpen={openCard === 2} index={2}>
        <CardHeader>Qualifications</CardHeader>
        <CardContent isOpen={openCard === 2}>
          <FancyParagraph>
            Certified Electrician with a diploma in Sound Engineering. Extensive
            hands-on experience working with top-notch clients in various industries.
          </FancyParagraph>
        </CardContent>
      </Card>
    </Container>
  );
};

export default About;
