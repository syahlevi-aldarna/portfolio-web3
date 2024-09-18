import React, { useState, useEffect } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Skills from './components/Skills';
import NFTGallery from './components/NFTGallery';
import Web3Connect from './components/Web3Connect';
import Footer from './components/Footer';
import InteractiveBackground from './components/InteractiveBackground';
import Loader from './components/Loader';
import ThemeToggle from './components/ThemeToggle';

const lightTheme = {
  background: '#f0f0f0',
  text: '#333333',
  primary: '#00a86b',
  secondary: '#008cba',
  cardBackground: '#ffffff'
};

const darkTheme = {
  background: '#0a0e17',
  text: '#e0fbfc',
  primary: '#00ff9f',
  secondary: '#00b8ff',
  cardBackground: 'rgba(10, 14, 23, 0.8)'
};

const AppContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  color: ${props => props.theme.text};
  background-color: ${props => props.theme.background};
  overflow-x: hidden;
`;

const ContentContainer = styled.div`
  position: relative;
  z-index: 1;
  padding: 20px;
  box-sizing: border-box;
`;

function App() {
  const [loading, setLoading] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
  }, []);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const theme = isDarkMode ? darkTheme : lightTheme;

  if (loading) {
    return <Loader />;
  }

  return (
    <ThemeProvider theme={theme}>
      <AppContainer>
        <InteractiveBackground />
        <ContentContainer>
          <ThemeToggle toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
          <Header />
          <AboutMe />
          <Projects />
          <Skills />
          <NFTGallery />
          <Web3Connect />
          <Footer />
        </ContentContainer>
      </AppContainer>
    </ThemeProvider>
  );
}

export default App;