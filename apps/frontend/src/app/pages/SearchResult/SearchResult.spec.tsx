import { render } from '@testing-library/react';

import SearchResult from './SearchResult';

describe('SearchResult', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SearchResult />);
    expect(baseElement).toBeTruthy();
  });
});
