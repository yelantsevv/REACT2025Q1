import { Country } from '../type';
import { useLocalStorage } from '../useLocalStorage';
import s from './Card.module.css';
import DeleteVisit from './DeleteVisit';
export default function Card({
  country,
  setCardShow,
}: {
  country: Country;
  setCardShow: (showModal: boolean) => void;
}) {
  const { addStor } = useLocalStorage('country');
  function helper(e: React.MouseEvent<HTMLDivElement>) {
    if (e.target === e.currentTarget) {
      setCardShow(false);
    }
  }

  addStor(country.name.common);

  return (
    <div className={s.container} onClick={helper}>
      <div className={s.card}>
        <h2>{country.name.common}</h2>
        <p>Capital: {country.capital?.[0] || 'N/A'}</p>
        <p>Region: {country.region}</p>
        <p>Population: {country.population.toLocaleString()}</p>
        <button onClick={() => setCardShow(false)}>Close</button>
        <DeleteVisit country={country} />
      </div>
    </div>
  );
}
