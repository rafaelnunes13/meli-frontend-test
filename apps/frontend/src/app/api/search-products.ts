import { IResponseItemList } from '../entities/response-item-list.interface'

const searchProducts = async (search: string | null): Promise<IResponseItemList> => {
  const response = await fetch(`http://localhost:3333/api/items?q=${search}`);
  return await response.json();
}

export default searchProducts;