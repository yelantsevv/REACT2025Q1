import Home from './page';
interface PageProps {
  searchParams: Promise<Record<string, string>>;
}
export default async function Default({ searchParams }: PageProps) {
  return <Home searchParams={searchParams} />;
}
