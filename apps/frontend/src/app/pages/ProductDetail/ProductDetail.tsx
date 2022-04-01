import styles from './ProductDetail.module.scss';

/* eslint-disable-next-line */
export interface ProductDetailProps {}

const ProductDetail: React.FunctionComponent<ProductDetailProps> = (props: ProductDetailProps) => {
  return (
    <div className={styles['container']}>
      <h1>Welcome to ProductDetail!</h1>
    </div>
  );
}

export default ProductDetail;
