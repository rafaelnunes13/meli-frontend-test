import { IResponseItem } from '../../entities/response-item-list.interface';
import ListItem from '../ListItem/ListItem';
import styles from './List.module.scss';

export interface IListProps {
  items?: Array<IResponseItem>;
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