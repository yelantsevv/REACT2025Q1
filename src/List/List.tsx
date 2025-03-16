import { Country } from '../type';
export default function List({ country }: { country: Country }) {
  return (
    <tr>
      <td className="flag">{country.flag}</td>
      <td>{country.name.common}</td>
      <td>{country.capital?.[0] || 'N/A'}</td>
      <td>{country.region}</td>
      <td>{country.population.toLocaleString()}</td>
    </tr>
  );
}
