import styles from './CustomLink.module.css';
import clsx from 'clsx';
import type { CustomLinkProps } from '../../types/types';
import Link from 'next/link';
import { useLocalStorage } from '../../hooks';
import { useRouter } from 'next/router';
export default function CustomLink({ query, item }: CustomLinkProps) {
  const path = useRouter();
  const { page } = path.query;
  const [, setValue] = useLocalStorage('query');
  return (
    <Link
      href={query || ''}
      data-testid="link"
      className={clsx(
        styles.button,
        !query && styles.inactive,
        (page || '1') == item && styles.active
      )}
      onClick={(e) => {
        if (!query) return e.preventDefault();
        setValue(query);
      }}
    >
      {item}
    </Link>
  );
}
