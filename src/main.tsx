import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import './styles/scrollbar.scss';
import { Provider } from 'react-redux';
import { store } from './redux/store.ts';
import { MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <MantineProvider>
        <App />
      </MantineProvider>
    </Provider>
  </React.StrictMode>
);
