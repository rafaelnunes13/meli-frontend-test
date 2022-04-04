import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import getProductDetails from '../../api/get-product-details';
import Details from '../../components/Details/Details';
import { IResponseItemDetail } from '../../entities/response-item-detail.interface';
import styles from './ProductDetail.module.scss';

const ProductDetail: React.FunctionComponent = () => {  
  const [details, setDetails] = useState<IResponseItemDetail>();

  const { id } = useParams();

  useEffect(() => {
    getProductDetails(id).then(setDetails);
  }, [id]);
  
  return details ? <main className={styles['main']}><Details details={details} /></main> : null;
}

export default ProductDetail;
