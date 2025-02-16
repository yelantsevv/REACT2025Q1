import styles from './About.module.css';
import { Film } from '..';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Results } from '../../types/types';
export default function About({ people }: { people: Results }) {
  const { search, page } = useRouter().query;

  return (
    <div data-testid="about" className={styles.container}>
      <Link
        href={{ pathname: '/', query: { search, page } }}
        className={styles.fon}
      />
      <div className={styles.about}>
        <Link
          href={{ pathname: '/', query: { search, page } }}
          className={styles.back}
        >
          Back
        </Link>

        <div className={styles.info}>
          <p>
            <b>Actor</b>: {people?.name}
          </p>
          <p>
            <b>gender</b>: {people?.gender}
          </p>
          <p>
            <b>height</b>: {people?.height}
          </p>
          <p>
            <b>mass</b>: {people?.mass}
          </p>
          <p>
            <b>birth_year</b>: {people?.birth_year}
          </p>
          <p>
            <b>skin</b>: {people?.skin_color}
          </p>
        </div>
        <h2>Films</h2>
        <div className={styles.films}>
          {people?.films?.map((film, index) => (
            <Film key={index} film={film} />
          ))}
        </div>
      </div>
    </div>
  );
}
