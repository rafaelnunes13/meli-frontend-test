import { AUTHOR } from '../../shared/author';
import { getDecimals } from '../../shared/utils';
import { IItemDescription, IItemInformation } from './item-information.interface';
import { IResponseItemDetail } from './response-item-detail.interface';

const detailMapper = (source: IItemInformation, description?: IItemDescription): IResponseItemDetail => {
  return {
    author: AUTHOR,
    item: {
      id: source.id,
      title: source.title,
      price: {
        currency: source.currency_id,
        amount: source.price,
        decimals: getDecimals(source.price)
      },
      picture: source.thumbnail,
      condition: source.condition,
      free_shipping: source.shipping.free_shipping,
      sold_quantity: source.sold_quantity,
      description: description.plain_text
    }
  }
}

export default detailMapper;
