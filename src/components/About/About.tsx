'use server';
import styles from './About.module.css';
import { Results } from '../../types/types';
import { Suspense } from 'react';
import Back from './Back';
import Film from '../Film/Film';

export default async function About({ people }: { people: Results }) {
  return (
    <div data-testid="about" className={styles.container}>
      <Back className={styles.fon} />
      <div className={styles.about}>
        <Back className={styles.back} nameBtn="Back" />
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
            <Suspense
              key={index}
              fallback={<div className={styles.loading + ' ' + styles.title} />}
            >
              <Film filmLink={film} />
            </Suspense>
          ))}
        </div>
      </div>
    </div>
  );
}
