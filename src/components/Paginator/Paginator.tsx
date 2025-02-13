import styles from './Paginator.module.css';
import { helper } from '../../helpers';
import { CustomLink } from '..';
import { useState } from 'react';
import { api, URL, useGetPeopleListQuery } from '../../store/Redux/api';

export default function Paginator() {
  const [link, setLink] = useState(helper.query());
  useGetPeopleListQuery(link);

  const { data } = api.useGetPeopleListQuery(helper.query());

  const number = Math.ceil((data?.count || 0) / 10);
  const arrList = new Array(number).fill(0).map((_, i) => i + 1);
  const { search } = helper.useSearchParams();
  return (
    <div className={styles.pagination} data-testid="paginator">
      <CustomLink
        search={data?.previous?.replace(URL, '')}
        pageLink={setLink}
        item={'prev'}
      />
      {arrList.map((item) => (
        <CustomLink
          key={item}
          search={`?search=${search}&page=${item}`}
          pageLink={setLink}
          item={item}
        />
      ))}
      <CustomLink
        search={data?.next?.replace(URL, '')}
        pageLink={setLink}
        item={'next'}
      />
    </div>
  );
}
