import { IResponseItemDetail } from '../../../entities/response-item-detail.interface';
import Translator from '../../Translator/Translator';
import DetailsPrice from './DetailsPrice/DetailsPrice';
import styles from './DetailsText.module.scss';

export interface IDetailsTextProps {
  details: IResponseItemDetail;
}


const DetailsText: React.FunctionComponent<IDetailsTextProps> = (props) => {
  const condition = `details.condition.${props.details.item.condition}`;
  return (
    <div>
      <p><Translator path={ condition }/> - { props.details.item.sold_quantity } <Translator path='details.soldQuantitySufix'/></p>
      <p><strong>{ props.details.item.title }</strong></p>
      <DetailsPrice price={props.details.item.price}/>

      <button className={styles['buy-button']}>
        <Translator path='details.buy'/>
      </button>
    </div>
  );
}

export default DetailsText;