import { render } from '@testing-library/react';
import { AUTHOR } from '../../../entities/author';
import DetailsText, { IDetailsTextProps } from './DetailsText';

const defaultProps: IDetailsTextProps = {
  details: {
    author: AUTHOR,
    item: {
      id: 'item-id',
      title: 'Item Title',
      price: {
        currency: 'BRL',
        amount: 1500,
        decimals: 1
      },
      picture: 'picture.png',
      condition: 'new',
      free_shipping: false,
      sold_quantity: 10,
      description: 'The items description'
    }
  }
}

jest.mock('../../Translator/Translator', () => {
  return () => 'Translator'
});

describe('DetailsText', () => {
  it('should render the component', () => {
    const { baseElement } = render(<DetailsText details={defaultProps.details}/>);
    expect(baseElement).toBeTruthy();
  });
});
