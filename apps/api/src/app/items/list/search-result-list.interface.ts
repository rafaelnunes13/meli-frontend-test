export interface ISearchResult {
  id: string;
  title: string;
  price: number;
  currency_id: string;
  category_id: string;
  thumbnail: string;
  condition: string;
  shipping: {
    free_shipping: boolean
  }
}

export interface ISearchResultList {
  results: Array<ISearchResult>;
}
