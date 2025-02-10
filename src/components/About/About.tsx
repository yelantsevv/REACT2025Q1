import { NavLink, useNavigate } from 'react-router';
import type { FetchBaseQueryError } from '@reduxjs/toolkit/query';
import styles from './About.module.css';
import { helper } from '../../helpers';
import Film from '../Film/Film';
import Spinner from '../Spinner/Spinner';
import { useGetPeopleQuery } from '../../store/Redux/api';

export default function About() {
  const navigate = useNavigate();
  const id = helper.useParams() || '';
  const query = helper.query();
  const { data, isLoading, error } = useGetPeopleQuery(id);

  if (isLoading) {
    return (
      <div data-testid="about" className={styles.container}>
        <NavLink to={query} className={styles.fon} />
        <div className={styles.about}>
          <Spinner />
          <NavLink to={query} className={styles.back}>
            Back
          </NavLink>
        </div>
      </div>
    );
  }
  if (error) {
    setTimeout(() => navigate(query), 2000);
    return (
      <div data-testid="about" className={styles.container}>
        <NavLink to={query} className={styles.fon} />
        <div className={styles.about}>
          <div className={styles.redirect}>
            <h1>{(error as FetchBaseQueryError).status}</h1>
            <h3>REDIRECT</h3>
          </div>
          <NavLink to={query} className={styles.back}>
            Back
          </NavLink>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <NavLink to={query} className={styles.fon} />
      <div className={styles.about}>
        <NavLink to={query} className={styles.back}>
          Back
        </NavLink>

        <div className={styles.info}>
          <p>
            <b>Actor </b>:{data?.name}
          </p>
          <p>
            <b>gender </b>:{data?.gender}
          </p>
          <p>
            <b>height </b>:{data?.height}
          </p>
          <p>
            <b>mass </b>:{data?.mass}
          </p>
          <p>
            <b>birth_year </b>:{data?.birth_year}
          </p>
          <p>
            <b>skin </b>:{data?.skin_color}
          </p>
        </div>
        <h2>Films</h2>
        <div className={styles.films}>
          {data?.films?.map((film) => <Film key={film} film={film} />)}
        </div>
      </div>
    </div>
  );
}
