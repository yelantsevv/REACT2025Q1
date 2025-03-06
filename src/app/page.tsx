import { notFound } from 'next/navigation';
import { CardList, Paginator } from '../components';
import { getSearch } from '../lib/api';

export const dynamic = 'force-dynamic';

interface PageProps {
  searchParams: Promise<Record<string, string>>;
}

export default async function HomePage({ searchParams }: PageProps) {
  const { page = '1', search = '' } = await searchParams;
  const people = await getSearch({ search, page });
  if (!people) notFound();

  return (
    <>
      <Paginator {...people} search={search} />
      <CardList people={people} />
    </>
  );
}
