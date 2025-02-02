import { Link } from 'react-router';
import styles from './About.module.css';
import { helper } from '../../helpers';
import { getData, URL } from '../../api';
import { useEffect, useState } from 'react';
import { Person, Results } from '../../types/types';
import Film from '../Film/Film';
import Spinner from '../Spinner/Spinner';

export default function About() {
  const [about, setAbout] = useState<Results>();
  const id = helper.useParams();
  const query = helper.query();

  useEffect(() => {
    getData(URL + query).then((e) => {
      const [about] = (e as Person).results.filter((item) => item.name === id);
      setAbout(about);
    });
  }, [query, id]);

  if (!about) {
    return (
      <div className={styles.about}>
        <Spinner />
        <Link to={query} className={styles.back}>
          Back
        </Link>
      </div>
    );
  }

  return (
    <div className={styles.about}>
      <b>{id}</b>
      <p>gender: {about?.gender}</p>
      <p>height: {about?.height}</p>
      <p>mass: {about?.mass}</p>
      <ul className={styles.films}>
        <b>Films:</b>
        {about?.films.map((film) => <Film key={film} film={film} />)}
      </ul>

      <Link to={query} className={styles.back}>
        Back
      </Link>
    </div>
  );
}
