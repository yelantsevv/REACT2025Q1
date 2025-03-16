import axios from 'axios';
import { use, useState } from 'react';
import { Country } from './type';
import List from './components/List';
import Population from './components/Population';
import Region from './components/Region';
import Name from './components/Name';
import Capital from './components/Capital';

const response: Promise<Country[]> = axios
  .get('https://restcountries.com/v3.1/all')
  .then((res) => res.data);

function App() {
  const dataCountry = use(response);
  const [data, setData] = useState(dataCountry);

  return (
    <div className="table-container">
      <table className="country-table">
        <thead>
          <tr className="table-header">
            <th>Flag</th>
            <Name dataCountry={dataCountry} data={data} setData={setData} />
            <Capital
              className="capital"
              dataCountry={dataCountry}
              data={data}
              setData={setData}
            />
            <Region
              className="region"
              dataCountry={dataCountry}
              setData={setData}
            />
            <Population className="population" data={data} setData={setData} />
          </tr>
        </thead>
        <tbody>
          {data.map((country) => (
            <List key={country.cca2} country={country} />
          ))}
        </tbody>
      </table>
      {/* <pre>{JSON.stringify(data[200], null, 2)}</pre> */}
    </div>
  );
}

export default App;
