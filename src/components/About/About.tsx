import { NavLink } from 'react-router';
import styles from './About.module.css';
import { helper } from '../../helpers';
import Film from '../Film/Film';
import type { Results } from 'src/types/types';

export default function AboutPage({ data }: { data: Results }) {
  if (!data?.name) {
    return null;
  }
  const query = helper.query();

  return (
    <div data-testid="about" className={styles.container}>
      <NavLink to={query} className={styles.fon} />
      <div className={styles.about}>
        <NavLink to={query} className={styles.back}>
          Back
        </NavLink>
        <div className={styles.info}>
          <p>
            <b>Actor</b>: {data?.name}
          </p>
          <p>
            <b>gender</b>: {data?.gender}
          </p>
          <p>
            <b>height</b>: {data?.height}
          </p>
          <p>
            <b>mass</b>: {data?.mass}
          </p>
          <p>
            <b>birth_year</b>: {data?.birth_year}
          </p>
          <p>
            <b>skin</b>: {data?.skin_color}
          </p>
        </div>
        <h2>Films</h2>
        <div className={styles.films}>
          {data?.films?.map((film) => <Film key={film.title} data={film} />)}
        </div>
      </div>
    </div>
  );
}
