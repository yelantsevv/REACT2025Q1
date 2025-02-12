import { useDispatch, useSelector } from 'react-redux';
import { CSVLink } from 'react-csv';
import styles from './Selected.module.css';
import { RootState } from '../../store/store';
import { clear, del } from '../../store/Redux/features/choiceSlice';

export default function Selected() {
  const { choice } = useSelector((state: RootState) => state.choice);
  const dispatch = useDispatch();

  const headers = [
    { label: 'Name', key: 'name' },
    { label: 'Gender', key: 'gender' },
    { label: 'Mass', key: 'mass' },
    { label: 'Height', key: 'height' },
    { label: 'skin', key: 'skin_color' },
    { label: 'Eye', key: 'eye_color' },
    { label: 'hair', key: 'hair_color' },
    { label: 'Url', key: 'url' },
  ];

  return (
    <div className={styles.selected}>
      <h3>Selected</h3>
      <ul>
        {choice.map((item, index) => (
          <li key={index} className={styles.selectedItem}>
            <p>{item.name}</p>
            <button
              className={styles.removeBtn}
              onClick={() => dispatch(del(item.name))}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
      <h3>{choice.length} items are selected</h3>
      <button onClick={() => dispatch(clear())} className={styles.removeAll}>
        Remove All
      </button>
      <CSVLink
        className={styles.saveBtn}
        filename={choice.length + '_selected_people.csv'}
        data={choice}
        headers={headers}
      >
        Download as CSV
      </CSVLink>
    </div>
  );
}
