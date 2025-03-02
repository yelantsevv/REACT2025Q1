import { createRoot } from 'react-dom/client';
import './index.css';
import Heder from './components/Heder.tsx';
import { BrowserRouter, Route, Routes } from 'react-router';
import UnControl from './components/UnControl.tsx';
import ReactForm from './components/ReactForm.tsx';
import App from './App.tsx';
import { Provider } from 'react-redux';
import { store } from './store/store.ts';

createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Heder />}>
          <Route index element={<App />} />
          <Route path="un-control" element={<UnControl />} />
          <Route path="react-form" element={<ReactForm />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </Provider>
);
