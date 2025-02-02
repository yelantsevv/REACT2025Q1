import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { About, ErrorBoundary } from './components';
import { BrowserRouter, Routes, Route } from 'react-router';

createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <ErrorBoundary>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route path=":id" element={<About />} />
          </Route>
          <Route path="*" element={<p>Not found</p>} />
        </Routes>
      </BrowserRouter>
    </ErrorBoundary>
  </StrictMode>
);
