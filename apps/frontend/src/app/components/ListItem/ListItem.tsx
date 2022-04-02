import { IResponseItem } from '../../entities/response-item-list.interface';
import styles from './ListItem.module.scss';
import ItemText from './ItemText/ItemText';
import { useNavigate } from 'react-router';

export interface IListItemProps {
  item: IResponseItem;
}

const ListItem: React.FunctionComponent<IListItemProps> = (props) => {
  const navigate = useNavigate();

  const handleItemClick = () => {
    window.history.pushState(null, '', `/items/${props.item.id}`);
    navigate(`/items/${props.item.id}`, { replace: true });
  }
  return (
    <div className={styles['item-container']} onClick={ handleItemClick }>
      <img className={styles['item-picture']} src={ props.item.picture } alt={ props.item.title } />
      <ItemText item={ props.item }/>
    </div>
  );
}

export default ListItem;