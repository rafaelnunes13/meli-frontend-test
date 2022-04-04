import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import searchProducts from '../../api/search-products';
import List from '../../components/List/List';
import { IResponseItemList } from '../../entities/response-item-list.interface';
import styles from './SearchResult.module.scss';

const SearchResult: React.FunctionComponent = () => {
  
  const [result, setResult] = useState<IResponseItemList>();

  const search = new URLSearchParams(useLocation().search).get('search');

  useEffect(() => {
    searchProducts(search).then(setResult);
  }, [search]);

  return (
    <main className={styles['main']}>
      <div className={styles['container']}>
        <List items={result?.items ?? []}></List>
      </div>
    </main>
  );
}

export default SearchResult;
