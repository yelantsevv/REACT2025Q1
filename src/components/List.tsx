import { memo, useState } from 'react';
import { createPortal } from 'react-dom';
import { Country } from '../type';
import Card from './Card';
import { useLocalStorage } from '../useLocalStorage';

function List({ country }: { country: Country }) {
  const [cardShow, setCardShow] = useState(false);
  const { stor } = useLocalStorage('country');
  return (
    <>
      <tr
        onClick={() => setCardShow(true)}
        className={stor.includes(country.name.common) ? 'visited' : ''}
      >
        <td className="flag">{country.flag}</td>
        <td>{country.name.common}</td>
        <td>{country.capital?.[0] || 'N/A'}</td>
        <td>{country.region}</td>
        <td>{country.population.toLocaleString()}</td>
      </tr>

      {cardShow &&
        createPortal(
          <Card country={country} setCardShow={() => setCardShow(false)} />,
          document.body
        )}
    </>
  );
}

export default memo(List);
