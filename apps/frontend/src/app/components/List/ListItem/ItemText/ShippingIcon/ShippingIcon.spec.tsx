import { render } from '@testing-library/react';
import ShippingIcon, { IShippingIconProps } from './ShippingIcon';

describe('ShippingIcon', () => {
  it('should render the component when free shipping is true', () => {
    const { baseElement } = render(<ShippingIcon freeShipping={true}/>);
    expect(baseElement.getElementsByTagName('svg').length).toBe(1);
  });

  it('should not render the component when free shipping is false', () => {
    const { baseElement } = render(<ShippingIcon freeShipping={false}/>);
    expect(baseElement.getElementsByTagName('svg').length).toBe(0);
  });
});