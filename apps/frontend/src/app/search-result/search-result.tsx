import { Link } from 'react-router-dom';
import styles from './search-result.module.scss';

/* eslint-disable-next-line */
export interface SearchResultProps {}

export function SearchResult(props: SearchResultProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to SearchResult!</h1>
      <Link to="/items/23"> Go to product 123 </Link>
    </div>
  );
}

export default SearchResult;
