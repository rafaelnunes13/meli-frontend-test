import ProductDetail from './ProductDetail';
import * as getProductDetails from '../../api/get-product-details';
import { AUTHOR } from '../../entities/author';
import { act } from 'react-dom/test-utils';
import { Container, render } from 'react-dom';

jest.mock('../../components/Details/Details', () => {
  return () => <div>Details</div>
});

describe('ProductDetail.spec | ProductDetail', () => {

  let container: Container | null = null;

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
    jest.spyOn(getProductDetails, 'default').mockResolvedValue({
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
    });
  });

  it('should render successfully', async () => {
    await act(async () => {
      render(<ProductDetail />, container);
    });
    expect(container).toBeTruthy();
  });
});
