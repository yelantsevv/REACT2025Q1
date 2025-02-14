import type { FetchBaseQueryError } from '@reduxjs/toolkit/query';
import styles from './About.module.css';
import { Film, Spinner } from '..';
import { useGetPeopleQuery } from '../../store/Redux/api';
import Link from 'next/link';
import { useRouter } from 'next/router';
export default function About() {
  const { id, search, page } = useRouter().query;

  const { data, isLoading, error } = useGetPeopleQuery(id as string);

  if (isLoading) {
    return (
      <div data-testid="about-loading" className={styles.container}>
        <Link
          href={{ pathname: '/', query: { search, page } }}
          className={styles.fon}
        />
        <div className={styles.about}>
          <Spinner />
          <Link
            href={{ pathname: '/', query: { search, page } }}
            className={styles.back}
          >
            Back
          </Link>
        </div>
      </div>
    );
  }
  if (error) {
    // setTimeout(() => navigate(query), 2000);
    return (
      <div data-testid="about-error" className={styles.container}>
        <Link
          href={{ pathname: '/', query: { search, page } }}
          className={styles.fon}
        />
        <div className={styles.about}>
          <div className={styles.redirect}>
            <h1>{(error as FetchBaseQueryError).status}</h1>
            <h3>REDIRECT</h3>
          </div>
          <Link
            href={{ pathname: '/', query: { search, page } }}
            className={styles.back}
          >
            Back
          </Link>
        </div>
      </div>
    );
  }

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
          {data?.films?.map((film) => <Film key={film} film={film} />)}
        </div>
      </div>
    </div>
  );
}
