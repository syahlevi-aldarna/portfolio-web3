import React from 'react';
import styled from 'styled-components';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const FooterContainer = styled.footer`
  text-align: center;
  padding: 40px 0;
  margin-top: 60px;
  background-color: rgba(10, 14, 23, 0.8);
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-bottom: 20px;
`;

const SocialIcon = styled.a`
  color: #e0fbfc;
  font-size: 24px;
  transition: color 0.3s ease;

  &:hover {
    color: #00ff9f;
  }
`;

const Copyright = styled.p`
  font-size: 1rem;
  color: #e0fbfc;
`;

function Footer() {
  return (
    <FooterContainer id="footer">
      <SocialLinks>
        <SocialIcon href="https://github.com/syahlevi-aldarna" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </SocialIcon>
        <SocialIcon href="https://linkedin.com/in/syahlevi-aldarna" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </SocialIcon>
        <SocialIcon href="mailto:ruchapnara@gmail.com">
          <FaEnvelope />
        </SocialIcon>
      </SocialLinks>
      <Copyright>&copy; 2023 Syahlevi Aldarna. Hak Cipta Dilindungi.</Copyright>
    </FooterContainer>
  );
}

export default Footer;