import { Outlet } from 'react-router';

import Paginator from '../../src/components/Paginator/Paginator';
import type { Route } from '../+types/root';
import Card from '../../src/components/Card/Card';
import styles from '../../src/App.module.css';
import type { Person } from 'src/types/types';

export async function loader({ request }: Route.LoaderArgs) {
  const url = new URL(request.url);
  const search = url.search || '';
  const page = url.searchParams.get('page') || '1';
  const data = await fetch(`https://swapi.dev/api/people/${search}`).then(
    (res) => res.json()
  );
  return { data, page };
}

export default function SidebarLayout({ loaderData }: Route.ComponentProps) {
  const { data, page } = loaderData as unknown as {
    data: Person;
    page: string;
  };

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
