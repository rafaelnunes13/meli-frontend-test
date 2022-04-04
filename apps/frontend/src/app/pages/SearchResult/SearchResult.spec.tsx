import SearchResult from './SearchResult';
import * as searchProducts from '../../api/search-products';
import { AUTHOR } from '../../entities/author';
import { Container, render } from 'react-dom';
import { act } from 'react-dom/test-utils';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useLocation: () => ({
    pathname: 'localhost:4200/items?search=test'
  })
}));

jest.mock('../../components/List/List', () => () => 'List');

describe('SearchResult', () => {

  let container: Container | null = null;

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);

    jest.spyOn(searchProducts, 'default').mockResolvedValue({
      author: AUTHOR,
      categories: [],
      items: []
    });
  });

  it('should render successfully', async () => {
    await act(async () => {
      render(<SearchResult />, container);
    });
    expect(container).toBeTruthy();
  });
});
