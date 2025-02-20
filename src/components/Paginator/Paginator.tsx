import styles from './Paginator.module.css';
import { helper } from '../../helpers';
import { CustomLink } from '..';
import { useGetPeopleListQuery, URL } from '../../store/Redux/api';

export default function Paginator() {
  const { data } = useGetPeopleListQuery(helper.query());

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
        />
      ))}
      <CustomLink search={data?.next?.replace(URL, '')} item={'next'} />
    </div>
  );
}
