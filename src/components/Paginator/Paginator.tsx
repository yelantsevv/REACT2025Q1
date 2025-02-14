import styles from './Paginator.module.css';
import { CustomLink } from '..';
import { useRouter } from 'next/router';
import { api, URL } from '../../store/Redux/api';

export default function Paginator() {
  const router = useRouter();
  const { search = '', page = '1' } = router.query;
  const { data } = api.useGetPeopleListQuery(`/?search=${search}&page=${page}`);

  const number = Math.ceil((data?.count || 0) / 10);
  const arrList = new Array(number).fill(0).map((_, i) => i + 1);
  return (
    <div className={styles.pagination} data-testid="paginator">
      <CustomLink
        query={data?.previous?.replace(URL, '') || ''}
        item={'prev'}
      />
      {arrList.map((item) => (
        <CustomLink
          key={item}
          query={`?search=${search}&page=${item}`}
          item={item}
        />
      ))}
      <CustomLink query={data?.next?.replace(URL, '') || ''} item={'next'} />
    </div>
  );
}
