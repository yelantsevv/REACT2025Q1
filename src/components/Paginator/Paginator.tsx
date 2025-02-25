import styles from './Paginator.module.css';
import { helper } from '../../helpers';
import CustomLink from '../CustomLink/CustomLink';
import { URL } from '../../store/Redux/api';
import type { Person } from 'src/types/types';

export default function Paginator({
  data,
  page,
}: {
  data: Person;
  page: string;
}) {
  const number = Math.ceil((data?.count || 0) / 10);
  const arrList = new Array(number).fill(0).map((_, i) => i + 1);
  const { search } = helper.useSearchParams();
  return (
    <div className={styles.pagination} data-testid="paginator">
      <CustomLink search={data?.previous?.replace(URL, '')} item={'prev'} />
      {arrList.map((item) => (
        <CustomLink
          key={item}
          search={`?search=${search}&page=${item}`}
          item={item}
          page={page}
        />
      ))}
      <CustomLink search={data?.next?.replace(URL, '')} item={'next'} />
    </div>
  );
}
