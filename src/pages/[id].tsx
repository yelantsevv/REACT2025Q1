import { GetServerSidePropsContext } from 'next';
import Id from '.';
import { getPeople, getSearch } from '../store/api';
import { HomeProps } from '../types/types';

export async function getServerSideProps({ query }: GetServerSidePropsContext) {
  const [person, people] = await Promise.all([
    getSearch(query),
    getPeople(query),
  ]);

  return { props: { people, person } };
}

export default function Page(people: HomeProps) {
  return <Id {...people} />;
}
