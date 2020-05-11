import React from 'react';
import logo from './logo.svg';
import { Layout } from './components/Layout/Layout';
import { ThemeProvider } from 'emotion-theming'
import theme from '@rebass/preset'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Layout />
      </div>
    </ThemeProvider>
  );
}

export default App;
