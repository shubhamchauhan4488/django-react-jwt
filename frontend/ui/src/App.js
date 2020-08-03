import React from 'react';
import logo from './logo.svg';
import { Layout } from './components/Layout/Layout';
import { ThemeProvider } from 'emotion-theming'
import theme from './Theme/theme'
import { Provider } from 'react-redux';
import store from './store/configureStore';

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <div className="App">
          <Layout />
        </div>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
