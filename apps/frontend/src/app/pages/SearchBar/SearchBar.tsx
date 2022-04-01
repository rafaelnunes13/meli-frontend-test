import { FaSearch } from "react-icons/fa";
import { Outlet, useLocation, useNavigate } from 'react-router';
import styles from './SearchBar.module.scss';

export interface SearchBarProps {}

const SearchBar: React.FunctionComponent<SearchBarProps> = (props: SearchBarProps) => {
  
  const navigate = useNavigate();

  const onSubmit = (event: any) => {
    const searchTerm = event.target.searchTerm.value;
    event.preventDefault();
    navigate(`/items?search=${searchTerm}`, { replace: true, state: 'TEST' });
  }

  const search = new URLSearchParams(useLocation().search).get('search') ?? '';

  return (
    <>
      <header className={styles['header-container']}>
        <img className={styles['header-logo']} src='https://http2.mlstatic.com/storage/developers-site-cms-admin/268205826549-Mercado-Libre--3-.png'></img>
        <form className={styles['search-form']} onSubmit={ onSubmit }>
          <input className={styles['search-input']} type='text' name='searchTerm' placeholder='Buscar' defaultValue={search}></input>
          <button className={styles['search-button']}><FaSearch/></button>
        </form>
      </header>

      <Outlet />
    </>
  );
}

export default SearchBar;
