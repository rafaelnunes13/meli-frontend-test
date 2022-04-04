import { Outlet } from 'react-router';
import Logo from '../../components/Logo/Logo';
import SearchForm from '../../components/SearchForm/SearchForm';
import styles from './SearchBar.module.scss';

export interface SearchBarProps {}

const SearchBar: React.FunctionComponent<SearchBarProps> = (props: SearchBarProps) => {

  return (
    <>
      <header className={styles['header-container']}>        
        <Logo/>
        <SearchForm/>
      </header>

      <Outlet />
    </>
  );
}

export default SearchBar;
