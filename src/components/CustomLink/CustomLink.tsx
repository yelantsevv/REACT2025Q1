import { Link } from 'react-router';
import styles from './CustomLink.module.css';
import clsx from 'clsx';
import type { CustomLinkProps } from 'src/types/types';
export default function CustomLink({ search, item, page }: CustomLinkProps) {
  return (
    <Link
      data-testid="link"
      to={{ pathname: '/', search }}
      className={clsx(
        styles.button,
        !search && styles.inactive,
        page == item && styles.active
      )}
      onClick={(e) => {
        if (!search) return e.preventDefault();
      }}
    >
      {item}
    </Link>
  );
}
