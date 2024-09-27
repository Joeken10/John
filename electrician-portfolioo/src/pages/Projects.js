// src/pages/Projects.js
import React from 'react';
import styled from 'styled-components';
import '../App.css'; // Ensure CSS is imported

// Import a Google Font in your index.html or App.css file
// <link href="https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap" rel="stylesheet">

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #f0f4f8; /* Light background for contrast */
  min-height: 100vh; /* Ensures it fills the viewport */
  font-family: 'Great Vibes', cursive; /* Set a fancy font for the entire container */
`;

const Grid = styled.div`
  display: flex; /* Horizontal layout */
  justify-content: center; /* Center the cards */
  flex-wrap: wrap; /* Allow wrapping for smaller screens */
  margin: 20px 0; /* Space between grid and heading */
`;

const Card = styled.div`
  background-color: ${({ color }) => color}; /* Use prop for background color */
  color: #333; /* Dark text for readability */
  border-radius: 15px;
  padding: 20px;
  margin: 15px;
  width: 250px; /* Set width for cards */
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;
  position: relative;
  overflow: hidden; /* Ensures content doesn't overflow card */
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3); /* More pronounced shadow on hover */
  }
`;

const ProjectImage = styled.img`
  width: 100%; /* Full width image */
  height: auto; /* Maintain aspect ratio */
  border-radius: 10px; /* Rounded corners for images */
`;

const Projects = () => {
  const projects = [
    {
      title: "Home Electrical Installation",
      description: "Complete rewiring of a 3-bedroom house, including lighting, sockets, and fuse box.",
      imageUrl: "https://images.unsplash.com/photo-1559069347-d1e9632f56e2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400", // Electrical installation image
      color: "#ffeb3b" // Yellow
    },
    {
      title: "Concert Sound Setup",
      description: "Managed audio setup for a live concert with over 1000 attendees, ensuring top-quality sound.",
      imageUrl: "https://images.unsplash.com/photo-1525032755265-9d54b61274f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400", // Concert sound setup image
      color: "#ff6f61" // Coral
    },
    {
      title: "Studio Recording",
      description: "Recorded and mixed soundtracks for an independent artist’s debut album.",
      imageUrl: "https://images.unsplash.com/photo-1551772205-58d22bc66abf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400", // Studio recording image
      color: "#81d4fa" // Light blue
    }
  ];

  return (
    <Container>
      <h1 style={{ color: '#333', fontSize: '2.5rem' }}>Projects</h1>
      <Grid>
        {projects.map((project, index) => (
          <Card key={index} color={project.color}>
            <ProjectImage src={project.imageUrl} alt={project.title} />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </Card>
        ))}
      </Grid>
    </Container>
  );
};

export default Projects;
