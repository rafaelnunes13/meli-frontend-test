import { IResponseItemDetail } from '../../../entities/response-item-detail.interface';
import DetailsPrice from './DetailsPrice/DetailsPrice';
import styles from './DetailsText.module.scss';

export interface IDetailsTextProps {
  details: IResponseItemDetail;
}

const DetailsText: React.FunctionComponent<IDetailsTextProps> = (props) => {
  return (
    <div>
      <p>{ props.details.item.condition } - { props.details.item.sold_quantity } vendido(s)</p>
      <p><strong>{ props.details.item.title }</strong></p>
      <DetailsPrice price={props.details.item.price}/>

      <button className={styles['buy-button']}>Comprar</button>
    </div>
  );
}

export default DetailsText;