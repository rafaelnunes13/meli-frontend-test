import { Outlet } from 'react-router';
import Logo from '../../components/Logo/Logo';
import SearchForm from '../../components/SearchForm/SearchForm';
import styles from './SearchBar.module.scss';

const SearchBar: React.FunctionComponent = () => {

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
