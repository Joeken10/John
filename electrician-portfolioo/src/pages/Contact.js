import React from 'react';
import '../App.css'; // Ensure CSS is imported
import { FaEnvelope, FaWhatsapp, FaPhone, FaTwitter } from 'react-icons/fa'; // Importing icons

const contactInfo = [
  {
    id: 1,
    title: 'Email',
    content: 'joekentafir@gmail.com',
    link: 'mailto:joekentafir@gmail.com',
    icon: <FaEnvelope />,
    color: '#ff6f91', // Pink
  },
  {
    id: 2,
    title: 'WhatsApp',
    content: '+254 720955034',
    link: 'https://wa.me/254720955034',
    icon: <FaWhatsapp />,
    color: '#25D366', // Green
  },
  {
    id: 3,
    title: 'Phone',
    content: '+254 720955034',
    link: 'tel:+254720955034',
    icon: <FaPhone />,
    color: '#ffcc00', // Yellow
  },
  {
    id: 4, // Fixing the ID, previously it was 5 which skips 4
    title: 'Twitter',
    content: '@yourtwitterhandle',
    link: 'https://twitter.com/yourtwitterhandle',
    icon: <FaTwitter />,
    color: '#1DA1F2', // Twitter Blue
  },
];

const Contact = () => {
  return (
    <div className="container">
      <h1>Contact Me</h1>
      <div className="grid">
        {contactInfo.map((contact) => (
          <div
            key={contact.id}
            className="card"
            style={{ backgroundColor: contact.color }} // Dynamic background color
          >
            <div className="icon">{contact.icon}</div>
            <h2>{contact.title}</h2>
            <p>
              <strong>{contact.content}</strong>
              <br />
              <a href={contact.link} target="_blank" rel="noopener noreferrer">
                Get in touch
              </a>
            </p>
          </div>
        ))}
      </div>
      <button className="contact-button">Get in Touch</button>
      <div className="contact-image">
        <img src="../assets/contact_image.jpg" alt="Contact" /> {/* Update with the actual image */}
      </div>
    </div>
  );
};

export default Contact;
