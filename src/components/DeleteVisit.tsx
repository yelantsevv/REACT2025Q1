import { Country } from '../type';
import s from './Card.module.css';
import { useLocalStorage } from '../useLocalStorage';
import { useState } from 'react';

export default function DeleteVisit({
  country,
  click,
}: {
  country: Country;
  click: () => void;
}) {
  const [visit, setVisit] = useState(true);
  const { stor, delStor } = useLocalStorage('country');

  function helper(e: React.MouseEvent<HTMLDivElement>) {
    if (e.target === e.currentTarget) {
      setVisit(!visit);
      delStor(country.name.common);
      click();
    }
  }

  return (
    <div className={s.star} onClick={helper}>
      {stor.includes(country.name.common) ? 'Delete Visit' : ''}
    </div>
  );
}
