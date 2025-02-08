import Search from '../Search/Search';
import type { State } from '../../types/types';
import styles from './Header.module.css';
import Paginator from '../Paginator/Paginator';

export default function Header(props: State) {
  return (
    <div className={styles.header}>
      <Search {...props} />
      <Paginator {...props} />
    </div>
  );
}
