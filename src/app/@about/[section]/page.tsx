import { notFound } from 'next/navigation';
import { getPeople } from '../../../lib/api';
import { About } from '../../../components';

export default async function AboutSection({
  params,
}: {
  params: Promise<{ section: string }>;
}) {
  const { section } = await params;
  const people = await getPeople({ id: section });
  if (!people.name) notFound();
  return <About people={people} />;
}
