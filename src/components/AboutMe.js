import React from 'react';
import styled from 'styled-components';
import { useSpring, animated } from 'react-spring';

const AboutContainer = styled.section`
  margin: 60px 0;
  padding: 30px;
  background-color: rgba(10, 14, 23, 0.8);
  border-radius: 10px;
`;

const Title = styled.h2`
  color: #00ff9f;
  margin-bottom: 20px;
`;

const Content = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
`;

function AboutMe() {
  const fadeIn = useSpring({
    from: { opacity: 0, transform: 'translateY(50px)' },
    to: { opacity: 1, transform: 'translateY(0px)' },
    config: { duration: 1000 }
  });

  return (
    <animated.div style={fadeIn}>
      <AboutContainer id="about">
        <Title>Tentang Saya</Title>
        <Content>
          Saya adalah seorang pengembang blockchain dan Web3 yang bersemangat. Dengan latar belakang dalam pengembangan web dan keamanan informasi, saya fokus pada menciptakan solusi terdesentralisasi yang inovatif. Saya percaya bahwa teknologi blockchain memiliki potensi untuk merevolusi berbagai industri, dan saya berkomitmen untuk berkontribusi pada evolusi ini melalui pengembangan smart contract yang aman dan aplikasi DApp yang user-friendly.
        </Content>
      </AboutContainer>
    </animated.div>
  );
}

export default AboutMe;