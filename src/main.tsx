import { createRoot } from 'react-dom/client';
import Heder from './components/Heder/Heder.tsx';
import { BrowserRouter, Route, Routes } from 'react-router';
import UnControlRef from './components/Form/UnControlRef.tsx';
import ReactForm from './components/Form/ReactForm.tsx';
import App from './App.tsx';
import { Provider } from 'react-redux';
import { store } from './store/store.ts';
import Theme from './Context/Provider.tsx';
import './index.css';
import UnControlFormData from './components/Form/UnControlFormData.tsx';

createRoot(document.getElementById('root') as HTMLElement).render(
  <Theme>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Heder />}>
            <Route index element={<App />} />
            <Route path="react-form" element={<ReactForm />} />
            <Route path="un-control" element={<UnControlRef />} />
            <Route path="form-data" element={<UnControlFormData />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  </Theme>
);
