import { AUTHOR } from '../entities/author';
import { IResponseItemList } from '../entities/response-item-list.interface';
import searchProducts from './search-products';

describe('search-products.spec | searchProducts', () => {

  it('should fetch data and return as json', async () => {

    const response: IResponseItemList = {
      author: AUTHOR,
      categories: [],
      items: []
    };

    // FIXME: https://github.com/jsdom/jsdom/issues/1724
    global.fetch = jest.fn().mockResolvedValue({
      json: jest.fn().mockResolvedValue(response)
    });

    const list = await searchProducts('search-term');

    expect(global.fetch).toHaveBeenCalled();
    expect(list).toEqual(response);
  });
});
