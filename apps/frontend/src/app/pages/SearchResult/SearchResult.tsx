import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import List from '../../components/List';
import { IResponseItemList } from '../../entities/response-item-list.interface';
import styles from './SearchResult.module.scss';

export interface SearchResultProps {}

const SearchResult: React.FunctionComponent<SearchResultProps> = (props: SearchResultProps) => {
  
  const [result, setResult] = useState<IResponseItemList>();

  const search = new URLSearchParams(useLocation().search).get('search');

  useEffect(()=>{
    fetch(`http://localhost:3333/api/items?q=${search}`)
      .then(response => response.json())
      .then(response => {
        console.log('response', response)
        return response;
      })
      .then(setResult)
  }, [search]);

  return (
    <>
    <main className={styles['main']}>
      <div className={styles['container']}>
        <List items={result?.items}></List>
      </div>
    </main>
    </>
  );
}

export default SearchResult;
