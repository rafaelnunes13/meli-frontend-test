import { AUTHOR } from '../../shared/author';
import { IItemInformation } from './item-information.interface';
import { IResponseItemDetail } from './response-item-detail.interface';
import detailMapper from './detail-mapper';

describe('detail-mapper.spec |', () => {

  const source: IItemInformation = {
    id: 'item-id',
    title: 'Item title',
    price: 100.12,
    currency_id: 'BRL',
    thumbnail: 'thumb.png',
    condition: 'new',
    shipping: {
      free_shipping: false
    },
    sold_quantity: 10
  };

  const response: IResponseItemDetail = {
    author: AUTHOR,
    item: {
      id: 'item-id',
      title: 'Item title',
      price: {
        currency: 'BRL',
        amount: 100.12,
        decimals: 12
      },
      picture: 'thumb.png',
      condition: 'new',
      free_shipping: false,
      sold_quantity: 10,
      description: 'Descrição'
    }
  };

  it('should map the source to the item details', () => {
    expect(detailMapper(source, 'Descrição')).toEqual(response);
  });
});
