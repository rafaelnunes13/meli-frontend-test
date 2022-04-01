import { IAuthor } from './author';

export interface IResponseItemDetail {
  author: IAuthor,
  item: {
    id: string,
    title: string,
    price: {
      currency: string,
      amount: number,
      decimals: number
    },
    picture: string;
    condition: string;
    free_shipping: boolean;
    sold_quantity: number;
    descricao?: string;
  }
}
