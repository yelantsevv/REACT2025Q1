import { GetServerSidePropsContext } from 'next';
import Id from '.';
import { getPeople, getSearch } from '../store/api';
import { Person, Results } from '../types/types';

export async function getServerSideProps({ query }: GetServerSidePropsContext) {
  const [person, people] = await Promise.all([
    getSearch(query),
    getPeople(query),
  ]);

  return { props: { people, person } };
}

interface HomeProps {
  person: Person;
  people: Results;
}
export default function Page(people: HomeProps) {
  return <Id {...people} />;
}
