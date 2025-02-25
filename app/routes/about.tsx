import AboutPage from '../../src/components/About/About';
import type { Results } from 'src/types/types';
import { getPeople } from '../api';
import type { Route } from './+types/about';

export async function loader({ request }: Route.LoaderArgs) {
  const url = new URL(request.url);
  const id = url.pathname;
  const data: Results = await getPeople({ id });
  return { data };
}

export default function About({ loaderData }: Route.ComponentProps) {
  const { data } = loaderData;
  return <AboutPage data={data} />;
}
