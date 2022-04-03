export interface IItemInformation {
  id: string;
  title: string;
  price: number;
  currency_id: string;
  thumbnail: string;
  condition: string;
  shipping: {
    free_shipping: boolean
  };
  sold_quantity: number;
}


export interface IItemDescription {
  plain_text: string;
}
