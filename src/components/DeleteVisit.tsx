import { Country } from '../type';
import s from './Card.module.css';
import { useLocalStorage } from '../useLocalStorage';
import { useState } from 'react';

export default function DeleteVisit({ country }: { country: Country }) {
  const [visit, setVisit] = useState(true);
  const { stor, delStor } = useLocalStorage('country');

  function helper(e: React.MouseEvent<HTMLDivElement>) {
    if (e.target === e.currentTarget) {
      setVisit(!visit);
      delStor(country.name.common);
    }
  }

  return (
    <div className={s.star} onClick={helper}>
      {stor.includes(country.name.common) ? 'Del Visit' : ''}
    </div>
  );
}
