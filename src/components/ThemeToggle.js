import React from 'react';
import styled from 'styled-components';
import { FaSun, FaMoon } from 'react-icons/fa';

const ToggleButton = styled.button`
  position: fixed;
  top: 20px;
  right: 20px;
  background-color: ${props => props.theme.cardBackground};
  border: none;
  color: ${props => props.theme.text};
  font-size: 24px;
  cursor: pointer;
  z-index: 1000;
  padding: 10px;
  border-radius: 50%;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.1);
  }
`;

function ThemeToggle({ toggleTheme, isDarkMode }) {
  return (
    <ToggleButton onClick={toggleTheme}>
      {isDarkMode ? <FaSun /> : <FaMoon />}
    </ToggleButton>
  );
}

export default ThemeToggle;