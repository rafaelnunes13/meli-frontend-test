import { AUTHOR } from '../entities/author';
import { IResponseItemDetail } from '../entities/response-item-detail.interface';
import getProductDetails from './get-product-details';

describe('get-product-details.spec | getProductDetails', () => {

  it('should fetch data and return as json', async () => {

    const response: IResponseItemDetail = {
      author: AUTHOR,
      item: {
        id: 'item-id',
        title: 'Item Title',
        price: {
          currency: 'BRL',
          amount: 1500,
          decimals: 1
        },
        picture: 'picture.png',
        condition: 'new',
        free_shipping: false,
        sold_quantity: 10,
        description: 'The items description'
      }
    };

    // FIXME: https://github.com/jsdom/jsdom/issues/1724
    global.fetch = jest.fn().mockResolvedValue({
      json: jest.fn().mockResolvedValue(response)
    });

    const details = await getProductDetails('item-id');

    expect(global.fetch).toHaveBeenCalled();
    expect(details).toEqual(response);
  });
});
