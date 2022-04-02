import { IResponseItemDetail } from '../entities/response-item-detail.interface';

const getProductDetails = async (itemId?: string): Promise<IResponseItemDetail> => {
  const response = await fetch(`http://localhost:3333/api/items/${itemId}`);
  return await response.json();
}

export default getProductDetails;