import { environment } from '../../environments/environment';
import { IResponseItemList } from '../entities/response-item-list.interface'

const searchProducts = async (search: string | null): Promise<IResponseItemList> => {
  const response = await fetch(`${environment.baseApiUrl}/items?q=${search}`);
  return await response.json();
}

export default searchProducts;