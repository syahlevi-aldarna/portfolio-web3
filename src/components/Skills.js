import React from 'react';
import styled from 'styled-components';
import { useSpring, animated } from 'react-spring';

const SkillsContainer = styled.section`
  margin: 60px 0;
`;

const SkillCategory = styled.div`
  margin-bottom: 30px;
`;

const CategoryTitle = styled.h3`
  font-size: 1.8rem;
  color: #00ff9f;
  margin-bottom: 15px;
`;

const SkillGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 20px;
`;

const SkillItem = styled(animated.div)`
  background-color: rgba(10, 14, 23, 0.8);
  border-radius: 10px;
  padding: 15px;
  text-align: center;
`;

const SkillName = styled.p`
  font-size: 1rem;
  color: #e0fbfc;
`;

function Skills() {
  const fadeIn = useSpring({
    from: { opacity: 0, transform: 'translateY(50px)' },
    to: { opacity: 1, transform: 'translateY(0px)' },
    config: { duration: 1000 }
  });

  const skills = {
    "Blockchain": ["Solidity", "Web3.js", "Ethers.js", "Hardhat", "Truffle"],
    "Frontend": ["React", "Next.js", "TypeScript", "Styled Components"],
    "Backend": ["Node.js", "Express", "GraphQL", "MongoDB"],
    "Other": ["Git", "Docker", "AWS", "CI/CD"]
  };

  return (
    <SkillsContainer id="skills">
      <h2>Keterampilan</h2>
      {Object.entries(skills).map(([category, skillList]) => (
        <SkillCategory key={category}>
          <CategoryTitle>{category}</CategoryTitle>
          <SkillGrid>
            {skillList.map((skill, index) => (
              <SkillItem key={index} style={fadeIn}>
                <SkillName>{skill}</SkillName>
              </SkillItem>
            ))}
          </SkillGrid>
        </SkillCategory>
      ))}
    </SkillsContainer>
  );
}

export default Skills;