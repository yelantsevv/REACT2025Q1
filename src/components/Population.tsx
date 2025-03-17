import { memo, useState } from 'react';
import { Props } from '../type';

function Population({ className, data, setData }: Props) {
  const [population, setPopulation] = useState('123');

  const toggleSortOrder = () => {
    setPopulation(population === '123' ? '321' : '123');

    const dataNew = data.toSorted((a, b) => {
      if (population !== '123') {
        return a.population - b.population;
      } else {
        return b.population - a.population;
      }
    });
    setData(dataNew);
  };

  return (
    <th className={className}>
      <div onClick={toggleSortOrder}>
        {population === '123' ? '▲' : '▼'} Population
      </div>
    </th>
  );
}

// export default Population;
export default memo(Population, (prev, next) => {
  return prev.data.length === next.data.length;
});
