import { AUTHOR } from '../../shared/author';
import { IResponseItemList } from '../list/response-item-list.interface';
import { ISearchResultList } from '../list/search-result-list.interface';

const source: ISearchResultList = {
  results: [{
    id: 'item-id',
    title: 'Item title',
    price: 100.12,
    currency_id: 'BRL',
    category_id: 'category-id',
    thumbnail: 'thumb.png',
    condition: 'new',
    shipping: {
      free_shipping: false
    }
  }]
};

const response: IResponseItemList = {
  author: AUTHOR,
  categories: ['category-id'],
  items: [{
    id: 'item-id',
    title: 'Item title',
    price: {
      currency: 'BRL',
      amount: 100.12,
      decimals: 12
    },
    picture: 'thumb.png',
    condition: 'new',
    free_shipping: false
  }]
};

const mockListRequest = { query: { q: 'search value' } };

// eslint-disable-next-line
const mockListResponse = { json: () => {} };

export const listTestSupport = { source, response, mockListRequest, mockListResponse };