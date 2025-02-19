'use client';
import styles from './CustomLink.module.css';
import clsx from 'clsx';
import type { CustomLinkProps } from '../../types/types';
import Link from 'next/link';
import { useLocalStorage } from '../../hooks';
import { useSearchParams } from 'next/navigation';
export default function CustomLink({ query, item }: CustomLinkProps) {
  const page = useSearchParams().get('page');
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
      onClick={() => setValue(query)}
    >
      {item}
    </Link>
  );
}
