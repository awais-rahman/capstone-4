import React from 'react';
import { AppProvider } from '@toolpad/core';
import { Outlet } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import SchoolIcon from '@mui/icons-material/School';
import ArchiveIcon from '@mui/icons-material/Archive';
import SettingsIcon from '@mui/icons-material/Settings';
import logo from '../src/Images/logo.svg';
import { Box, createTheme, Typography } from '@mui/material';

const Navigation = [
  { segment: 'home', title: 'Home', icon: <HomeIcon />, link: '/home' },
  { kind: 'divider' },
  {
    segment: 'reports',
    title: 'Enrolled',
    icon: <SchoolIcon />,
    children: [
      { segment: 'english', title: 'English 02', link: 'english' }, // Fixed path
      { segment: 'prodev', title: 'Professional Development', link: 'professional-development' },
      { segment: 'webdev', title: 'Web Development', link: 'web-development' },
      { segment: 'engcom', title: 'English Communication', link: 'english-communication' },
    ],
  },
  { segment: 'archived', title: 'Archived Classes', icon: <ArchiveIcon />, link: '/archived' },
  { segment: 'settings', title: 'Settings', icon: <SettingsIcon />, link: '/settings' },
];


function App() {
  return (
    <AppProvider navigation={Navigation} branding={{ logo: <img src={logo} />, title: 'Classroom' }}>
      <Outlet />
    </AppProvider>
  );
}

export default App;
