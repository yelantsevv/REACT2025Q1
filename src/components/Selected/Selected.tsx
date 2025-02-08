import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import styles from './Selected.module.css';
import { clear, del } from '../../store/features/choiceSlice';

export default function Selected() {
  const { choice } = useSelector((state: RootState) => state.choice);
  const dispatch = useDispatch();

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
      <button onClick={() => dispatch(clear())} className={styles.removeAll}>
        Remove All {choice.length}
      </button>
      <button className={styles.saveBtn}>Save to scv</button>
    </div>
  );
}
