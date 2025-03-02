import { NavLink, Outlet } from 'react-router';

export default function Heder() {
  return (
    <div className="container">
      <div className="heder">
        <NavLink to="/">App</NavLink>
        <NavLink to="/un-control">Un Control Form</NavLink>
        <NavLink to="/react-form">React Hook Form</NavLink>
      </div>
      <Outlet />
    </div>
  );
}
