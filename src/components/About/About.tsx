import { NavLink, useNavigate } from 'react-router';
import styles from './About.module.css';
import { helper } from '../../helpers';
import { getData, URL } from '../../api';
import { useEffect, useState } from 'react';
import { Results } from '../../types/types';
import Film from '../Film/Film';
import Spinner from '../Spinner/Spinner';

export default function About() {
  const navigate = useNavigate();
  const [about, setAbout] = useState<Results>();
  const id = helper.useParams();
  const query = helper.query();
  useEffect(() => {
    getData(URL + id)
      .then((e) => setAbout(e as Results))
      .catch((e) => {
        setTimeout(() => navigate(query), 2000);
        setAbout({ error: e.message } as Results);
      });
  }, [query, id, navigate]);

  if (!about || about.error) {
    return (
      <div data-testid="about" className={styles.container}>
        <NavLink to={query} className={styles.fon} />
        <div className={styles.about}>
          {!about?.error && <Spinner />}
          {about?.error && (
            <div className={styles.redirect}>
              <h1>{about.error}</h1>
              <h3>REDIRECT</h3>
            </div>
          )}
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
            <b>Actor </b>:{about.name}
          </p>
          <p>
            <b>gender </b>:{about.gender}
          </p>
          <p>
            <b>height </b>:{about.height}
          </p>
          <p>
            <b>mass </b>:{about.mass}
          </p>
          <p>
            <b>birth_year </b>:{about.birth_year}
          </p>
          <p>
            <b>skin </b>:{about.skin_color}
          </p>
        </div>
        <h2>Films</h2>
        <div className={styles.films}>
          {about?.films?.map((film) => <Film key={film} film={film} />)}
        </div>
      </div>
    </div>
  );
}
