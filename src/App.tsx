import { use, useState } from 'react';
import List from './components/List';
import Population from './components/Population';
import Region from './components/Region';
import Name from './components/Name';
import Capital from './components/Capital';
import { json } from './api';

function App() {
  const dataCountry = use(json);
  const [data, setData] = useState(dataCountry);
  return (
    <div className="table-container">
      <table className="country-table">
        <thead>
          <tr className="table-header">
            <th>Flag</th>
            <Name className="name" data={data} setData={setData} />
            <Capital className="capital" data={data} setData={setData} />
            <Region className="region" setData={setData} />
            <Population className="population" data={data} setData={setData} />
          </tr>
        </thead>
        <tbody>
          {data.map((country) => (
            <List key={country.cca2} country={country} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
