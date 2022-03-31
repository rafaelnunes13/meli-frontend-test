import { AUTHOR } from '../../shared/author';
import { countDecimals } from '../../shared/utils';
import { IItemInformation } from './item-information.interface';
import { IResponseItemDetail } from './response-item-detail.interface';

const detailMapper = (source: IItemInformation, description?: string): IResponseItemDetail => {
  return {
    author: AUTHOR,
    item: {
      id: source.id,
      title: source.title,
      price: {
        currency: source.currency_id,
        amount: source.price,
        decimals: countDecimals(source.price)
      },
      picture: source.thumbnail,
      condition: source.condition,
      free_shipping: source.shipping.free_shipping,
      sold_quantity: source.sold_quantity,
      descricao: description
    }
  }
}

export default detailMapper;
