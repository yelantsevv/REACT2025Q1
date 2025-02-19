import Home from './page';
interface PageProps {
  searchParams: Record<string, string | string[]>;
}
export default async function Default({ searchParams }: PageProps) {
  return <Home searchParams={searchParams} />;
}
