import { memo, use } from 'react';
import { Country } from '../type';
import { useLocalStorage } from '../useLocalStorage';
import s from './Card.module.css';
import { json } from '../api';

type Props = {
  country: Country;
  setCardShow: () => void;
};
function Card({ country, setCardShow }: Props) {
  const dataCountry = use(json);
  const { addStor, delStor } = useLocalStorage('country');

  function helper(e: React.MouseEvent<HTMLDivElement>) {
    if (e.target === e.currentTarget) {
      setCardShow();
    }
  }
  function helperBorder(border: string): string[] {
    return dataCountry
      .filter((item: Country) => item.cca3 === border)
      .map((item: Country) => item.name.common);
  }

  addStor(country.name.common);

  return (
    <div className={s.container} onClick={helper}>
      <div className={s.card}>
        <div className={s.imgContainer}>
          <img
            className={s.img}
            src={country.flags.svg}
            alt={country.name.common}
          />
          <img
            className={s.img}
            src={country.coatOfArms.svg}
            alt={country.name.common}
          />
        </div>
        <div className={s.textContainer}>
          <div className={s.country}>
            <h2>{country.name.common}</h2>
            <p>Capital: {country.capital?.[0] || 'N/A'}</p>
            <p>Region: {country.region}</p>
            <p>Subregion: {country.subregion || 'N/A'}</p>
            <p>Population: {country.population.toLocaleString()}</p>
            <p>Area: {country.area}</p>
          </div>
          <div className={s.borders}>
            <h3>Border Countries:</h3>
            <ul>
              {country.borders
                ?.map((item) => helperBorder(item))
                .map((item, index) => <li key={index}>{item}</li>) || 'N/A'}
            </ul>
          </div>
        </div>

        <button className={s.close} onClick={() => setCardShow()}>
          ❌
        </button>
        <div
          className={s.star}
          onClick={() => {
            delStor(country.name.common);
            setCardShow();
          }}
        >
          Delete Visit
        </div>
      </div>
    </div>
  );
}

export default memo(Card);
