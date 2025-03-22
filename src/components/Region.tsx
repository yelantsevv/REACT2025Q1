import { memo, use, useState } from 'react';
import { Props } from '../type';
import { json } from '../api';

function Region({ className, setData }: Omit<Props, 'data'>) {
  const dataCountry = use(json);
  const [region, setRegion] = useState('All');

  const RegionArr = [...new Set(dataCountry.map((item) => item.region))];

  const sortRegion = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const region = e.target.value;
    if (region === 'All') {
      setRegion('All');
      setData(dataCountry);
      return;
    }
    const data = dataCountry.filter((item) => {
      return item.region === region;
    });
    setRegion(region);
    setData(data);
  };
  return (
    <th className={className}>
      <label htmlFor="Region">
        Region
        <select
          className="region_option"
          name="Region"
          id="Region"
          value={region}
          onChange={sortRegion}
        >
          <option value="All">All</option>
          {RegionArr.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
      </label>
    </th>
  );
}

// export default Region;
export default memo(Region);
