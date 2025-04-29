import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './app.css';
import Home from './routes/home';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Home />
  </StrictMode>
);
