import { useTranslation } from 'react-i18next';
import { FaSearch } from 'react-icons/fa';
import { useLocation, useNavigate } from 'react-router';
import styles from './SearchForm.module.scss';

const SearchForm: React.FunctionComponent = () => {

  const navigate = useNavigate();

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const searchTerm = data.get('searchTerm');
    navigate(`/items?search=${searchTerm}`);
  }

  const search = new URLSearchParams(useLocation().search).get('search') ?? '';

  const { t } = useTranslation();

  return (
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
  );
}

export default SearchForm;