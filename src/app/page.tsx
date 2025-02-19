import { notFound } from 'next/navigation';
import { CardList, Paginator } from '../components';
import { getSearch } from '../lib/api';

export const dynamic = 'force-dynamic';

interface PageProps {
  searchParams: Record<string, string | string[] | undefined>;
}

export default async function HomePage({ searchParams }: PageProps) {
  const { page = '1', search = '' } = await searchParams;
  if (typeof page !== 'string') notFound();
  if (typeof search !== 'string') notFound();
  const people = await getSearch({ search, page });
  if (!people) notFound();

  return (
    <>
      <Paginator {...people} search={search} />
      <CardList people={people} />
    </>
  );
}
