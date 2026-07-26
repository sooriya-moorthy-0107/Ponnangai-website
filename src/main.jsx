import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { LoaderProvider } from './context/LoaderContext.jsx';
import { EnquiryProvider } from './context/EnquiryContext.jsx';
import App from './App.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <LoaderProvider>
          <EnquiryProvider>
            <App />
          </EnquiryProvider>
        </LoaderProvider>
      </BrowserRouter>
    </HelmetProvider>
  </React.StrictMode>,
);
