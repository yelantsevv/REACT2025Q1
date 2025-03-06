import { createRoot } from 'react-dom/client';
import Heder from './components/Heder/Heder.tsx';
import { BrowserRouter, Route, Routes } from 'react-router';
import UnControl from './components/UnControl/UnControl.tsx';
import ReactForm from './components/ReactForm/ReactForm.tsx';
import App from './App.tsx';
import { Provider } from 'react-redux';
import { store } from './store/store.ts';
import Theme from './Context/Provider.tsx';
import './index.css';

createRoot(document.getElementById('root') as HTMLElement).render(
  <Theme>
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
  </Theme>
);
