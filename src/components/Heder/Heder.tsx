import { NavLink, Outlet } from 'react-router';
import ContextBtn from '../../Context/ContextBtn';
import t from '../../Context/locales';
import s from './Heder.module.css';

export default function Heder() {
  return (
    <>
      <div className={s.heder}>
        <NavLink to="/">{t('form')}</NavLink>
        <NavLink to="/un-control">{t('un-control')}</NavLink>
        <NavLink to="/react-form">{t('react-form')}</NavLink>
        <ContextBtn />
      </div>
      <Outlet />
    </>
  );
}
