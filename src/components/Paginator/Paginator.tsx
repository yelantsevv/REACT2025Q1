import styles from './Paginator.module.css';
import { State } from '../../types/types';
import { URL } from '../../api';
import { helper } from '../../helpers';
import CustomLink from '../CustomLink/CustomLink';
export default function Paginator({ count, previous, next, pageLink }: State) {
  const number = Math.ceil((count || 0) / 10);
  const arrList = new Array(number).fill(0).map((_, i) => i + 1);
  const { search } = helper.useSearchParams();
  return (
    <div className={styles.pagination} data-testid="paginator">
      <CustomLink
        search={previous?.replace(URL, '')}
        pageLink={pageLink}
        item={'prev'}
      />
      {arrList.map((item) => (
        <CustomLink
          key={item}
          search={`?search=${search}&page=${item}`}
          pageLink={pageLink}
          item={item}
        />
      ))}
      <CustomLink
        search={next?.replace(URL, '')}
        pageLink={pageLink}
        item={'next'}
      />
    </div>
  );
}
