import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './pages/Home/main';
import reportWebVitals from './reportWebVitals';
import { GlobalStyle } from './components/GlobalStyled/styled';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>
);

reportWebVitals();
