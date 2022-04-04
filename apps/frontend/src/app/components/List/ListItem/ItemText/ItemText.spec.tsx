import { render } from '@testing-library/react';
import ItemText, { IItemTextProps } from './ItemText';

const defaultProps: IItemTextProps = {
  item: {
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
  }
}

describe('ItemText.spec | ItemText', () => {
  it('should render the component', () => {
    const { baseElement } = render(<ItemText item={defaultProps.item}/>);
    expect(baseElement).toBeTruthy();
  });
});
