import { render } from '@testing-library/react';
import { Simulate } from 'react-dom/test-utils';
import ListItem, { IListItemProps } from './ListItem';

const defaultProps: IListItemProps = {
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

const mockNavigate = jest.fn();

jest.mock('react-router', () => ({
  ...jest.requireActual('react-router'),
  useNavigate: () => mockNavigate
}));

describe('ListItem.spec | ListItem', () => {
  it('should render the component', () => {
    const { baseElement } = render(<ListItem item={defaultProps.item}/>);
    expect(baseElement).toBeTruthy();
  });

  it('should navigate on click', async () => {
    const { baseElement } = render(<ListItem item={defaultProps.item}/>);
    const container = baseElement.querySelector('.item-container');

    expect(container).toBeTruthy();

    Simulate.click(container as any);
  
    expect(mockNavigate).toHaveBeenCalledWith('/items/item-id');
  });
});