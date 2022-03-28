import { Link, Outlet } from 'react-router-dom';
import styles from './search-bar.module.scss';

/* eslint-disable-next-line */
export interface SearchBarProps {}

export function SearchBar(props: SearchBarProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to SearchBar!</h1>
      <Link to="/items"> Go to search </Link>

      <Outlet />
    </div>
  );
}

export default SearchBar;
