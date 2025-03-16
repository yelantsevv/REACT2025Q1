import { useState } from 'react';
import { Country } from '../type';

type NameProps = {
  className: string;
  dataCountry: Country[];
  data: Country[];
  setData: (data: Country[]) => void;
};

export default function Capital({
  className,
  dataCountry,
  data,
  setData,
}: NameProps) {
  const [capitalSort, setCapitalSort] = useState('abc');
  const [capital, setCapital] = useState('');
  const [capitalOpen, setCapitalOpen] = useState(false);

  function filterName(e: React.ChangeEvent<HTMLInputElement>) {
    const sortName = dataCountry.filter((item) =>
      item.capital?.[0].toLowerCase().includes(e.target.value.toLowerCase())
    );
    setCapital(e.target.value);
    setData(sortName);
  }

  const toggleSortOrder = () => {
    setCapitalSort(capitalSort === 'abc' ? 'desc' : 'abc');

    const dataNew = data.toSorted((a, b) => {
      if (capitalSort === 'abc') {
        return a.capital?.[0].localeCompare(b.capital?.[0]);
      } else {
        return b.capital?.[0].localeCompare(a.capital?.[0]);
      }
    });
    setData(dataNew);
  };

  function selectCapital(capital: string) {
    const sortName = dataCountry.filter((item) =>
      item.capital?.[0].toLowerCase().includes(capital.toLowerCase())
    );
    setData(sortName);
    setCapital(capital);
  }

  return (
    <th className={className}>
      <div onClick={toggleSortOrder}>
        {capitalSort === 'abc' ? '▲' : '▼'} Capital:
      </div>
      <input
        className="capital_input"
        list="capital-list"
        placeholder="capital"
        value={capital}
        onFocus={() => setCapitalOpen(true)}
        onBlur={() => setCapitalOpen(false)}
        onChange={filterName}
      />
      {capitalOpen && (
        <div className="dropdown">
          {data.map((country) => (
            <div
              key={country.cca2}
              className="dropdown-item"
              onMouseDown={() => selectCapital(country.capital?.[0] || '')}
            >
              {country.capital}
            </div>
          ))}
        </div>
      )}
    </th>
  );
}
