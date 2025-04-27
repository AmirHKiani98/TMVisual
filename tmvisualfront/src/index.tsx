// src/index.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';    // 👈 You missed this
import { store } from './store';            // 👈 Import your Redux store
import App from './App';
import './index.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>     {/* 👈 Wrap App in Provider */}
      <App />
    </Provider>
  </React.StrictMode>
);