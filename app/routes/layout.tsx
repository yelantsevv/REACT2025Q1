import { Outlet, useLoaderData } from 'react-router';

import Paginator from '../../src/components/Paginator/Paginator';
import Card from '../../src/components/Card/Card';
import styles from '../../src/App.module.css';
import type { Person } from 'src/types/types';
import { getPeople } from '../api';
import type { Route } from './+types/layout';

export async function loader({ request }: Route.LoaderArgs) {
  const url = new URL(request.url);
  const search = url.search || '';
  const page = url.searchParams.get('page') || '1';
  const data: Person = await getPeople({ id: search });
  return { data, page };
}

export default function SidebarLayout() {
  const { data, page } = useLoaderData<{ data: Person; page: string }>();

  return (
    <>
      <Paginator data={data} page={page} />
      <div className={styles.cardList}>
        {data?.results.map((item, index) => <Card key={index} {...item} />)}
      </div>
      <Outlet />
    </>
  );
}
