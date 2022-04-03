import { render } from '@testing-library/react';
import DetailsPrice, { IDetailsPriceProps } from './DetailsPrice';

const defaultProps: IDetailsPriceProps = {
  price: {
    currency: 'BRL',
    amount: 1500,
    decimals: 1
  }
}

describe('DetailsPrice', () => {

  it('should render the component', () => {
    const { baseElement } = render(<DetailsPrice price={defaultProps.price}/>);
    expect(baseElement).toBeTruthy();
  })
});