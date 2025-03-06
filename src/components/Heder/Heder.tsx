import { NavLink, Outlet } from 'react-router';
import ContextBtn from '../../Context/ContextBtn';
import locales from '../../Context/locales';
import s from './Heder.module.css';

export default function Heder() {
  const t = locales();
  return (
    <>
      <div className={s.heder}>
        <NavLink to="/">{t.form}</NavLink>
        <NavLink to="/un-control">{t.unControl}</NavLink>
        <NavLink to="/react-form">{t.reactForm}</NavLink>
        <ContextBtn />
      </div>
      <Outlet />
    </>
  );
}
