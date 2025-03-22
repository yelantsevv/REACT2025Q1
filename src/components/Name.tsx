import { memo, use, useState } from 'react';
import { Props } from '../type';
import { json } from '../api';

function Name({ className, data, setData }: Props) {
  const dataCountry = use(json);
  const [name, setName] = useState('abc');

  function filterName(e: React.ChangeEvent<HTMLInputElement>) {
    const sortName = dataCountry.filter((item) =>
      item.name.common.toLowerCase().includes(e.target.value.toLowerCase())
    );

    setData(sortName);
  }

  const toggleSortOrder = () => {
    setName(name === 'abc' ? 'desc' : 'abc');

    const dataNew = data.toSorted((a, b) => {
      if (name === 'abc') {
        return a.name.common.localeCompare(b.name.common);
      } else {
        return b.name.common.localeCompare(a.name.common);
      }
    });
    setData(dataNew);
  };

  return (
    <th className={className}>
      <div onClick={toggleSortOrder}>{name === 'abc' ? '▲' : '▼'} Name:</div>
      <input list="country-list" placeholder="name" onChange={filterName} />
      <datalist id="country-list">
        {dataCountry.map((country) => (
          <option key={country.cca2} value={country.name.common}></option>
        ))}
      </datalist>
    </th>
  );
}

export default memo(
  Name,
  (prev, next) => prev.data.length === next.data.length
);
