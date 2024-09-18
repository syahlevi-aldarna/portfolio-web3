import React from 'react';
import styled from 'styled-components';
import { useSpring, animated } from 'react-spring';

const ProjectsContainer = styled.section`
  margin: 60px 0;
`;

const ProjectCard = styled(animated.div)`
  background-color: rgba(10, 14, 23, 0.8);
  border-radius: 10px;
  padding: 30px;
  margin-bottom: 30px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 5px 15px rgba(0, 255, 159, 0.3);
  }
`;

const ProjectTitle = styled.h3`
  font-size: 1.8rem;
  color: #00ff9f;
  margin-bottom: 15px;
`;

const ProjectDescription = styled.p`
  font-size: 1rem;
  color: #e0fbfc;
  margin-bottom: 20px;
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

const TechTag = styled.span`
  background-color: rgba(0, 184, 255, 0.2);
  color: #00b8ff;
  padding: 5px 10px;
  border-radius: 5px;
  font-size: 0.9rem;
`;

function Projects() {
  const fadeIn = useSpring({
    from: { opacity: 0, transform: 'translateY(50px)' },
    to: { opacity: 1, transform: 'translateY(0px)' },
    config: { duration: 1000 }
  });

  const projects = [
    {
      title: "DeFi Lending Platform",
      description: "Platform pinjaman terdesentralisasi yang memungkinkan pengguna untuk meminjam dan meminjamkan aset kripto dengan suku bunga dinamis.",
      techStack: ["Solidity", "React", "Web3.js", "Hardhat"]
    },
    {
      title: "NFT Marketplace",
      description: "Pasar NFT yang memungkinkan pengguna untuk mencetak, membeli, dan menjual token non-fungible dengan fitur lelang dan royalti.",
      techStack: ["Solidity", "Next.js", "IPFS", "OpenSea API"]
    }
  ];

  return (
    <ProjectsContainer id="projects">
      <h2>Proyek-proyek</h2>
      {projects.map((project, index) => (
        <ProjectCard key={index} style={fadeIn}>
          <ProjectTitle>{project.title}</ProjectTitle>
          <ProjectDescription>{project.description}</ProjectDescription>
          <TechStack>
            {project.techStack.map((tech, i) => (
              <TechTag key={i}>{tech}</TechTag>
            ))}
          </TechStack>
        </ProjectCard>
      ))}
    </ProjectsContainer>
  );
}

export default Projects;