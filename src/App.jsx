// App.jsx
import React, { useState } from 'react';
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Services from './components/Project/Project';
import Contact from './components/Contact/Contact';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    transition: background 0.3s, color 0.3s;
  }
`;

const darkTheme = {
  background: '#0f172a',
  text: '#f1f5f9',
  secondary: '#1e293b',
  accent: '#38bdf8'
};

const lightTheme = {
  background: '#f9fafb',
  text: '#1e293b',
  secondary: '#e2e8f0',
  accent: '#0ea5e9'
};

const AppContainer = styled.div`
  font-family: 'Poppins', sans-serif;
  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
`;

function App() {
  const [darkMode, setDarkMode] = useState(true);

  const toggleTheme = () => setDarkMode(!darkMode);

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <GlobalStyle />
      <AppContainer>
        <Navbar toggleTheme={toggleTheme} darkMode={darkMode} />
        <Hero />
        <About />
        <Services />
        <Contact />
      </AppContainer>
    </ThemeProvider>
  );
}

export default App;