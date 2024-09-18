import React from 'react';
import styled from 'styled-components';
import { useSpring, animated } from 'react-spring';
import { Link } from 'react-scroll';

const HeaderContainer = styled.header`
  text-align: center;
  padding: 60px 0;
`;

const Title = styled(animated.h1)`
  font-size: 4rem;
  margin-bottom: 20px;
  background: linear-gradient(45deg, #00ff9f, #00b8ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const Subtitle = styled(animated.p)`
  font-size: 1.5rem;
  color: #00ff9f;
  margin-bottom: 30px;
`;

const NavContainer = styled.nav`
  display: flex;
  justify-content: center;
  gap: 20px;
`;

const NavLink = styled(Link)`
  color: ${props => props.theme.text};
  text-decoration: none;
  font-size: 1.2rem;
  cursor: pointer;
  transition: color 0.3s ease;

  &:hover {
    color: #00ff9f;
  }
`;

function Header() {
  const titleProps = useSpring({
    from: { opacity: 0, transform: 'translateY(-50px)' },
    to: { opacity: 1, transform: 'translateY(0px)' },
    config: { duration: 1000 },
  });

  const subtitleProps = useSpring({
    from: { opacity: 0, transform: 'translateY(50px)' },
    to: { opacity: 1, transform: 'translateY(0px)' },
    config: { duration: 1000, delay: 500 },
  });

  return (
    <HeaderContainer>
      <Title style={titleProps}>Syahlevi Aldarna</Title>
      <Subtitle style={subtitleProps}>Pengembang Web3 & Blockchain</Subtitle>
      <NavContainer>
        <NavLink to="about" smooth={true} duration={500}>Tentang Saya</NavLink>
        <NavLink to="projects" smooth={true} duration={500}>Proyek</NavLink>
        <NavLink to="skills" smooth={true} duration={500}>Keterampilan</NavLink>
        <NavLink to="nftgallery" smooth={true} duration={500}>Galeri NFT</NavLink>
        <NavLink to="web3connect" smooth={true} duration={500}>Koneksi Web3</NavLink>
        <NavLink to="footer" smooth={true} duration={500}>Kontak</NavLink>
      </NavContainer>
    </HeaderContainer>
  );
}

export default Header;