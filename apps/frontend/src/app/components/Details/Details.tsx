import { IResponseItemDetail } from '../../entities/response-item-detail.interface';
import Translator from '../Translator/Translator';
import styles from './Details.module.scss';
import DetailsText from './DetailsText/DetailsText';

export interface IDetailsProps {
  details: IResponseItemDetail;
}

const Details: React.FunctionComponent<IDetailsProps> = (props) => {
  return (
    <div className={styles['detail-container']}>
      <div className={styles['header-detail-container']}>
        <img
          className={styles['detail-picture']}
          src={ props.details.item.picture }
          alt={ props.details.item.title }
          data-cy='product-picture'/>
        <DetailsText details={props.details}/>
      </div>

      <div>
        <p>
          <strong className={styles['description-title']}><Translator path='details.productDescription'/></strong>
        </p>
        { props.details.item.description }
      </div>

    </div>
  );
}

export default Details;