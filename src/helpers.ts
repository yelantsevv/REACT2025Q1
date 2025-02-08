import {
  useSearchParams as searchParams,
  useParams as Params,
} from 'react-router';

export const helper = {
  useSearchParams: () => {
    const [searchParam] = searchParams();
    const search = searchParam.get('search') || '';
    const page = searchParam.get('page') || 1;
    return { search, page };
  },

  useParams: () => {
    const { id } = Params() || '';
    return id;
  },
  query: () => {
    const { search, page } = helper.useSearchParams();
    return `/?search=${search}&page=${page}`;
  },
};
