import { useSelector, useDispatch } from 'react-redux';
import { RootState } from './store/store';
import { delForm } from './store/features/dataFormSlice';
import locales from './Context/locales';
import s from './App.module.css';

export default function App() {
  const t = locales();
  const { dataForm } = useSelector((state: RootState) => state.dataForm);
  const dispatch = useDispatch();
  return (
    <div className={s.container}>
      {dataForm.length === 0 && <h2 className={s.title}>{t.NoData}</h2>}
      {dataForm.map((item) => {
        return (
          <div className={s.form} key={item.id}>
            <p>
              {t.name}: {item.name}
            </p>
            <p>
              {t.age}:{item.age}
            </p>
            <p>
              {t.email}: {item.email}
            </p>
            <p>
              {t.country}: {item.country}
            </p>
            <p>
              {item.flag} {item.cca2} {item.countryRus}
            </p>
            <img src={item.file as string} alt={item.name} width={100} />
            <button onClick={() => dispatch(delForm(item.id))}>
              {t.delete}
            </button>
          </div>
        );
      })}
    </div>
  );
}
