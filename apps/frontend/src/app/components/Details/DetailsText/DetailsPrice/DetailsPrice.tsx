import getSymbolFromCurrency from 'currency-symbol-map';
import { addTrailingZero, integerValueWithThousandSeparator } from '../../../../shared/utils';
import styles from './DetailsPrice.module.scss';

export interface IDetailsPriceProps {
  price: {
    currency: string,
    amount: number,
    decimals: number
  }
}

const DetailsPrice: React.FunctionComponent<IDetailsPriceProps> = (props) => {

  return (
    <p className={styles['details-amount']}>
      <span> { getSymbolFromCurrency(props.price.currency) } </span>
      { integerValueWithThousandSeparator(props.price.amount) }
      <sup className={styles['details-decimals']}>
        { addTrailingZero(props.price.decimals) }
      </sup>
    </p>
  );
}

export default DetailsPrice;
