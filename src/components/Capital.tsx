import { memo, use, useState, useCallback, useMemo, useEffect } from 'react';
import { Props } from '../type';
import { json } from '../api';

function Capital({ className, data, setData }: Props) {
  const dataCountry = use(json);
  const [capitalSort, setCapitalSort] = useState<'abc' | 'desc'>('abc');
  const [capital, setCapital] = useState('');
  const [capitalOpen, setCapitalOpen] = useState(false);

  const filterName = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;
      const filtered = dataCountry.filter((item) =>
        item.capital?.[0].toLowerCase().includes(value.toLowerCase())
      );
      setCapital(value);
      setData(filtered);
    },
    [dataCountry, setData]
  );

  const toggleSortOrder = () => {
    setCapitalSort(capitalSort === 'abc' ? 'desc' : 'abc');
  };

  const sortedData = useMemo(() => {
    return data.toSorted((a, b) => {
      return capitalSort === 'abc'
        ? a.capital?.[0].localeCompare(b.capital?.[0])
        : b.capital?.[0].localeCompare(a.capital?.[0]);
    });
  }, [data, capitalSort]);

  useEffect(() => {
    setData(sortedData);
  }, [sortedData, setData]);

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

export default memo(
  Capital,
  (prev, next) => prev.data.length === next.data.length
);
