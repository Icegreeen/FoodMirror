import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.footer`
  padding: 2rem;
`;

const FooterContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
  text-align: center;

  p {
    margin: 0;
    font-size: 0.9rem;
    color: #333;
  }

  a {
    color: #333;
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover {
      color: #ff6600;
    }
  }
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterContent>
        <p>&copy; {new Date().getFullYear()}All rights reserved.</p>
        <p>
          Developed by{' '}
          <a href="https://github.com/Icegreeen" target="_blank" rel="noopener noreferrer">
            Flávio Áquila
          </a>
        </p>
      </FooterContent>
    </FooterWrapper>
  );
};

export default Footer;