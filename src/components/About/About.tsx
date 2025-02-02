import { useNavigate } from 'react-router';
import styles from './About.module.css';
import { helper } from '../../helpers';
import { getData, URL } from '../../api';
import { useEffect, useState } from 'react';
import { Person, Results } from '../../types/types';
import Film from '../Film/Film';
import Spinner from '../Spinner/Spinner';

export default function About() {
  const navigate = useNavigate();
  const [about, setAbout] = useState<Results | null>(null);
  const id = helper.useParams();
  const query = helper.query();

  useEffect(() => {
    getData(URL + query).then((e) => {
      const [about] = (e as Person).results.filter((item) => item.name === id);
      setAbout(about);
    });
  }, [query, id]);

  const redirect = () => {
    navigate(query);
  };

  if (!about) {
    return (
      <div className={styles.container}>
        <div onClick={redirect} className={styles.fon} />
        <div className={styles.about}>
          <Spinner />
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
