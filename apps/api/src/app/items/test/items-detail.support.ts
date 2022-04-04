import { AUTHOR } from '../../shared/author';
import { IItemDescription, IItemInformation } from '../detail/item-information.interface';
import { IResponseItemDetail } from '../detail/response-item-detail.interface';

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

const sourceDescription: IItemDescription = {
  plain_text: 'Descrição'
}

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

const mockListRequest = { params: { id: 'item-id' } };

// eslint-disable-next-line
const mockListResponse = { json: () => {} };

const mockGetImplementation = (url: string) => {
  const responses = {
    'https://api.mercadolibre.com/items/item-id': { data: source },
    'https://api.mercadolibre.com/items/item-id/description': { data: sourceDescription }
  };
  return Promise.resolve(responses[url]);
};

export const detailTestSupport = { source, sourceDescription, response, mockListRequest, mockListResponse, mockGetImplementation };