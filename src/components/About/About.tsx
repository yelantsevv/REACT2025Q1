import { useNavigate } from 'react-router';
import styles from './About.module.css';
import { helper } from '../../helpers';
import { getData, URL } from '../../api';
import { useEffect, useState } from 'react';
import { Results, enums } from '../../types/types';
import Film from '../Film/Film';
import Spinner from '../Spinner/Spinner';

export default function About() {
  const navigate = useNavigate();
  const [about, setAbout] = useState<Results>();
  const id = helper.useParams();
  const query = helper.query();
  useEffect(() => {
    getData(URL + id)
      .then((e) => {
        return setAbout(e as Results);
      })
      .catch(() => {
        setTimeout(() => navigate(query), 2000);
        return setAbout({ name: enums.REDIRECT } as Results);
      });
  }, [query, id, navigate]);

  const redirect = () => {
    navigate(query, { replace: true });
  };

  if (!about || about.name === enums.REDIRECT) {
    return (
      <div className={styles.container}>
        <div onClick={redirect} className={styles.fon} />
        <div className={styles.about}>
          {about?.name !== enums.REDIRECT && <Spinner />}
          {about?.name === enums.REDIRECT && (
            <div className={styles.redirect}>
              <h2>Not found</h2>
              {enums.REDIRECT}
            </div>
          )}
          <button className={styles.back} onClick={redirect}>
            Back
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <div onClick={redirect} className={styles.fon} />
      <div className={styles.about}>
        <button className={styles.back} onClick={redirect}>
          Back
        </button>

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
          {about?.films.map((film) => <Film key={film} film={film} />)}
        </div>
      </div>
    </div>
  );
}
