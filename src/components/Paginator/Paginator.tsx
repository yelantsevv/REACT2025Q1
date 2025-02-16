import styles from './Paginator.module.css';
import { CustomLink } from '..';
import { useRouter } from 'next/router';
import { URL } from '../../store/api';
import { Person } from '../../types/types';

export default function Paginator({ count, previous, next }: Person) {
  const { search = '' } = useRouter().query;

  const number = Math.ceil((count || 0) / 10);
  const arrList = new Array(number).fill(0).map((_, i) => i + 1);
  return (
    <div className={styles.pagination} data-testid="paginator">
      <CustomLink query={previous?.replace(URL, '') || ''} item={'prev'} />
      {arrList.map((item) => (
        <CustomLink
          key={item}
          query={`?search=${search}&page=${item}`}
          item={item}
        />
      ))}
      <CustomLink query={next?.replace(URL, '') || ''} item={'next'} />
    </div>
  );
}
