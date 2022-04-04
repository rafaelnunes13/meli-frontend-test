import { environment } from '../../environments/environment';
import { IResponseItemDetail } from '../entities/response-item-detail.interface';

const getProductDetails = async (itemId?: string): Promise<IResponseItemDetail> => {
  const response = await fetch(`${environment.baseApiUrl}/items/${itemId}`);
  return await response.json();
}

export default getProductDetails;