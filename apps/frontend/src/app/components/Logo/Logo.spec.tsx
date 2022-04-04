import { fireEvent, render } from '@testing-library/react';
import Logo from './Logo';

const mockNavigate = jest.fn();

jest.mock('react-router', () => ({
  ...jest.requireActual('react-router'),
  useNavigate: () => mockNavigate
}));

describe('Logo.spec | Logo', () => {

  it('should render successfully', () => {
    const { baseElement } = render(<Logo />);
    expect(baseElement).toBeTruthy();
  });

  it('should navigate to home when logo is clicked', () => {
    const { baseElement } = render(<Logo />);
    const logo = baseElement.querySelector('.header-logo');

    expect(logo).toBeTruthy();

    fireEvent.click(logo as any);

    expect(mockNavigate).toHaveBeenCalledWith('/');
  });
});