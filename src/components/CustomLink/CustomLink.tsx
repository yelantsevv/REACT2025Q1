import { Link } from 'react-router';
import styles from './CustomLink.module.css';
import clsx from 'clsx';
import { helper } from '../../helpers';
import type { CustomLinkProps } from '../../types/types';

export default function CustomLink({
  search,
  pageLink,
  item,
}: CustomLinkProps) {
  const { page } = helper.useSearchParams();
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
        pageLink(search);
      }}
    >
      {item}
    </Link>
  );
}
