import { IResponseItem } from '../entities/response-item-list.interface';
import ListItem from './ListItem';

export interface IListProps {
  items?: Array<IResponseItem>
}

const List: React.FunctionComponent<IListProps> = (props) => {
  return (
    <ul>
      {
        props.items?.map(item => <li key={item.id}><ListItem item={item}/></li>)
      }
    </ul>
  );
}

export default List;