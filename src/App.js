import React, { useState } from 'react';
import { useRef } from "react";
import IconButton from '@mui/material/IconButton';

import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

import Ecosystem from './components/Ecosystem';
import Ecosystem2 from './components/Ecosystem2';
import Ecosystem3 from './components/Ecosystem3';
import Ecosystem4 from './components/Ecosystem4';
import Ecosystem5 from './components/Ecosystem5';
import PrivacyPolicy from './components/PrivacyPolicy';
import Header from './components/Header';
import Hero from './components/Hero';
import Mission from './components/Mission';
import { createTheme, ThemeProvider } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';

import './App.css';
import HowToBuy from './components/HowToBuy';
import Team from './components/Team';

import AOS from 'aos';
import 'aos/dist/aos.css';
import Roadmap from './components/Roadmap';
import Transparency from './components/Transparency';
import Community from './components/Community';
import Contact from './components/Contact';

function App() {


  const [mode, setMode] = useState('dark');
  const ref = useRef(null);

  React.useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  const theme = createTheme({
    palette: {
      mode: mode
    }
  })

  return (
    <React.Fragment ref={ref}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header mode={mode} setMode={setMode} />
        <Hero />
        <Mission />
        <Ecosystem />
        <Ecosystem2 />
        <Roadmap />
        <Transparency />
        <Community />
        <HowToBuy />
        <PrivacyPolicy />
        <Team />
        <Ecosystem3 />
        {/* <Ecosystem4 />
        <Ecosystem5 /> */}
        <Contact />
      </ThemeProvider>
    </React.Fragment>
  );
}

export default App;
