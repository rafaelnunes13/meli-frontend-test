import { useTranslation } from 'react-i18next';

export interface ITranslatorProps {
  path: string;
}

const Translator: React.FunctionComponent<ITranslatorProps> = (props) => {
  const { t } = useTranslation();
  return t(props.path);
}

export default Translator;