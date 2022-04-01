import { AUTHOR } from '../../shared/author';
import { IResponseItemList } from './response-item-list.interface';
import { ISearchResultList } from './search-result-list.interface';
import listMapper from './list-mapper';

describe('list-mapper.spec | listMapper', () => {

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

  it('should map from the search result to the response item', () => {
    expect(listMapper(source)).toEqual(response);
  });
});