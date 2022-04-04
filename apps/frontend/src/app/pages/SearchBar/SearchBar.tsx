import { useTranslation } from 'react-i18next';
import { FaSearch } from "react-icons/fa";
import { Outlet, useLocation, useNavigate } from 'react-router';
import styles from './SearchBar.module.scss';

export interface SearchBarProps {}

const SearchBar: React.FunctionComponent<SearchBarProps> = (props: SearchBarProps) => {
  
  const navigate = useNavigate();

  const onSubmit = (event: any) => {
    event.preventDefault();
    const data = new FormData(event.target);
    const searchTerm = data.get('searchTerm');
    navigate(`/items?search=${searchTerm}`);
  }

  const navigateToHome = () => {
    navigate('/');
  }

  const search = new URLSearchParams(useLocation().search).get('search') ?? '';

  const { t } = useTranslation();

  return (
    <>
      <header className={styles['header-container']}>
        <img
          onClick={ navigateToHome }
          className={styles['header-logo']}
          src='https://http2.mlstatic.com/storage/developers-site-cms-admin/268205826549-Mercado-Libre--3-.png'/>

        <form className={styles['search-form']} onSubmit={ onSubmit }>
          <input
            className={styles['search-input']}
            type='text' name='searchTerm'
            placeholder={ t('searchBar.searchInputPlaceholder') }
            defaultValue={search}
            data-cy='search-input'/>
          <button
            className={styles['search-button']}
            data-cy='search-button'>
            <FaSearch/>
          </button>
        </form>

      </header>

      <Outlet />
    </>
  );
}

export default SearchBar;
