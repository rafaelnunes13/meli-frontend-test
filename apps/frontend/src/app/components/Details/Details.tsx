import { IResponseItemDetail } from '../../entities/response-item-detail.interface';
import styles from './Details.module.scss';
import DetailsText from './DetailsText/DetailsText';

export interface IDetailsProps {
  details: IResponseItemDetail;
}

const Details: React.FunctionComponent<IDetailsProps> = (props) => {
  return (
    <div className={styles['detail-container']}>
      <div className={styles['header-detail-container']}>
        <img className={styles['detail-picture']} src={ props.details.item.picture } alt={ props.details.item.title } />
        <DetailsText details={props.details}/>
      </div>

      <div>
        <p><strong className={styles['description-title']}>Descrição do produto</strong></p>
        { props.details.item.description }
      </div>

    </div>
  );
}

export default Details;