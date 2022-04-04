import styles from './ListItem.module.scss';
import ItemText from './ItemText/ItemText';
import { useNavigate } from 'react-router';
import { IResponseItem } from '../../../entities/response-item-list.interface';

export interface IListItemProps {
  item: IResponseItem;
}

const ListItem: React.FunctionComponent<IListItemProps> = (props) => {
  const navigate = useNavigate();

  const handleItemClick = () => {
    navigate(`/items/${props.item.id}`);
  }

  return (
    <div className={styles['item-container']} data-cy='list-item-container' onClick={ handleItemClick }>
      <img className={styles['item-picture']} src={ props.item.picture } alt={ props.item.title } />
      <ItemText item={ props.item }/>
    </div>
  );
}

export default ListItem;