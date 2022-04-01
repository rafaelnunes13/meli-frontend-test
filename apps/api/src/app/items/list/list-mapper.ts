import { AUTHOR } from '../../shared/author';
import { getDecimals } from '../../shared/utils';
import { IResponseItem, IResponseItemList } from './response-item-list.interface';
import { ISearchResult, ISearchResultList } from './search-result-list.interface';

const itemFromSrcResult = (result: ISearchResult): IResponseItem => {
  return {
    id: result.id,
    title: result.title,
    price: {
      currency: result.currency_id,
      amount: result.price,
      decimals: getDecimals(result.price)
    },
    picture: result.thumbnail,
    condition: result.condition,
    free_shipping: result.shipping.free_shipping
  }
}

const listMapper = (source: ISearchResultList): IResponseItemList => {
  const response: IResponseItemList = {
    author: AUTHOR,
    categories: source.results.map(result => result.category_id),
    items: source.results.map(result => itemFromSrcResult(result))
  };
  return response;
}

export default listMapper;