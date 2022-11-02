import { StatusBar } from 'expo-status-bar';
import React from 'react';
import styled, { ThemeProvider } from 'styled-components';

import { Dashboard } from './src/screens/Dashboard';


import theme from './src/global/style/theme'

export default function App() {
  return (
    <ThemeProvider theme={ theme }>
      <Dashboard />
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}