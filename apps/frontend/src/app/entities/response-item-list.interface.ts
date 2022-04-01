import { IAuthor } from './author';

export interface IResponseItem {
  id: string;
  title: string;
  price: {
    currency: string,
    amount: number,
    decimals: number
  },
  picture: string;
  condition: string;
  free_shipping: boolean;
}

export interface IResponseItemList {
  author: IAuthor;
  categories: Array<string>;
  items: Array<IResponseItem>;
}
