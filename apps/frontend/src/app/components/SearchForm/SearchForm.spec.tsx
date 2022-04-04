import { fireEvent, render } from '@testing-library/react';

import SearchForm from './SearchForm';

const mockNavigate = jest.fn();

jest.mock('react-router', () => ({
  ...jest.requireActual('react-router'),
  useLocation: () => ({
    pathname: 'localhost:4200/items?search=test'
  }),
  useNavigate: () => mockNavigate
}));

jest.mock('react-i18next', () => ({
  ...jest.requireActual('react-i18next'),
  useTranslation: () => ({ t: () => {} })
}));

describe('SearchForm.spec | SearchForm', () => {

  it('should render successfully', () => {
    const { baseElement } = render(<SearchForm />);
    expect(baseElement).toBeTruthy();
  });

  it('should navigate to search when form is submited', () => {
    const { baseElement } = render(<SearchForm />);
    const button = baseElement.querySelector('button');
    const searchInput = baseElement.querySelector('input');

    expect(button).toBeTruthy();
    expect(searchInput).toBeTruthy();

    fireEvent.change(searchInput as HTMLInputElement, { target: { value: 'search-value' } } as any)
    fireEvent.click(button as HTMLButtonElement);

    expect(mockNavigate).toHaveBeenCalledWith('/items?search=search-value');
  });
});
