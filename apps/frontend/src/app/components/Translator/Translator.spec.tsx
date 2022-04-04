import { render } from '@testing-library/react';
import Translator, { ITranslatorProps } from './Translator';

const defaultProps: ITranslatorProps = {
  path: 'test'
};

jest.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (key: string) => key,
    i18n: { changeLanguage: jest.fn() }
  })
}));

describe('Translator', () => {
  it('should render the component', () => {
    const { baseElement } = render(<Translator path={defaultProps.path}/>);
    expect(baseElement).toBeTruthy();
  });
});
