import { useSelector, useDispatch } from 'react-redux';
import { RootState } from './store/store';
import { delForm } from './store/features/dataFormSlice';

export default function App() {
  const { dataForm } = useSelector((state: RootState) => state.dataForm);
  const dispatch = useDispatch();
  return (
    <div className="container_app">
      {dataForm.length === 0 && <h2>No data. Please fill out the form.</h2>}
      {dataForm.map((item) => {
        return (
          <div className="form" key={item.id}>
            <p>Name: {item.name}</p>
            <p>Age:{item.age}</p>
            <p>Email: {item.email}</p>
            <p>country: {item.country}</p>
            <p>
              {item.flag} {item.cca2} {item.countryRus}
            </p>
            <img src={item.file as string} alt={item.name} width={100} />
            <button onClick={() => dispatch(delForm(item.id))}>Delete</button>
          </div>
        );
      })}
    </div>
  );
}
