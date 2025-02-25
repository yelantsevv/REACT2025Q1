import AboutPage from '../../src/components/About/About';
import type { Route } from '../+types/root';
import type { Results } from 'src/types/types';

export async function loader({ request }: Route.LoaderArgs) {
  const url = new URL(request.url);
  const id = url.pathname.split('/').pop();
  const data = await fetch(`https://swapi.dev/api/people/${id}`).then((res) =>
    res.json()
  );
  return { data };
}

export default function About({ loaderData }: Route.ComponentProps) {
  const { data } = loaderData as unknown as { data: Results };
  return <AboutPage data={data} />;
}
