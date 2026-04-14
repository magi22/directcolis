import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import RouterApp from './RouterApp.tsx';
import { LanguageProvider } from './i18n/LanguageContext';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <LanguageProvider>
      <BrowserRouter>
        <RouterApp />
      </BrowserRouter>
    </LanguageProvider>
  </StrictMode>,
);
