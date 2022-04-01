import { IResponseItem } from '../entities/response-item-list.interface';

export interface IListItemProps {
  item: IResponseItem
}

const ListItem: React.FunctionComponent<IListItemProps> = (props) => {
  console.log('PROPS LIST', props);

  return (
    <p key={ props.item.id }> { props.item.title } </p>
  );
}

export default ListItem;