import getSymbolFromCurrency from 'currency-symbol-map';
import { IResponseItem } from '../../../entities/response-item-list.interface';
import { integerValueWithThousandSeparator } from '../../../shared/utils';
import ShippingIcon from '../ShippingIcon/ShippingIcon';
import styles from './ItemText.module.scss';

export interface IItemTextProps {
  item: IResponseItem;
}

const ItemText: React.FunctionComponent<IItemTextProps> = (props) => {
  return (
    <div>
      <p className={styles['item-price']}>
        <span>{ getSymbolFromCurrency(props.item.price.currency) } </span>
        <span className={styles['item-amount']}>{ integerValueWithThousandSeparator(props.item.price.amount) }</span>
        <ShippingIcon freeShipping={ props.item.free_shipping }/>
      </p>
      <p> { props.item.title } </p>
    </div>
  );
}

export default ItemText;