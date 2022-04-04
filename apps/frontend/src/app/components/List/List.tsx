import { IResponseItem } from '../../entities/response-item-list.interface';
import styles from './List.module.scss';
import ListItem from './ListItem/ListItem';

export interface IListProps {
  items: Array<IResponseItem>;
}

const List: React.FunctionComponent<IListProps> = (props) => {
  return (
    <ul className={styles['list']}>
      {
        props.items?.map(item => <li key={item.id}><ListItem item={item} /></li>)
      }
    </ul>
  );
}

export default List;