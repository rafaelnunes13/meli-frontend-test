import { render } from '@testing-library/react';

import SearchBar from './SearchBar';

jest.mock('../../components/Logo/Logo', () => () => 'Logo');
jest.mock('../../components/SearchForm/SearchForm', () => () => 'SearchForm');

describe('SearchBar.spec | SearchBar', () => {

  it('should render successfully', () => {
    const { baseElement } = render(<SearchBar />);
    expect(baseElement).toBeTruthy();
  });
});
