import { memo, useState } from 'react';
import { Country } from '../type';
import Card from './Card';
import { createPortal } from 'react-dom';
import { useLocalStorage } from '../useLocalStorage';

function List({ country }: { country: Country }) {
  const [cardShow, setCardShow] = useState(false);
  const { stor } = useLocalStorage('country');
  // console.log("🚀 ~ List:", country.name.common)
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
          <Card country={country} setCardShow={setCardShow} />,
          document.body
        )}
    </>
  );
}

// export default List;
export default memo(List);
