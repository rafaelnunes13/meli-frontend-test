import { render } from '@testing-library/react';
import List, { IListProps } from './List'

const defaultProps: IListProps = {
  items: [{
    id: 'item-id',
    title: 'Items title',
    price: {
      currency: 'BRL',
      amount: 1500,
      decimals: 1
    },
    picture: 'picture.png',
    condition: 'new',
    free_shipping: true
  }]
};

jest.mock('./ListItem/ListItem', () => () => 'ListItem');

describe('List', () => {
  it('should render the component', () => {
    const { baseElement } = render(<List items={defaultProps.items}/>);
    expect(baseElement).toBeTruthy();
  });
});