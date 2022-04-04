import { useNavigate } from 'react-router';
import styles from './Logo.module.scss';

export interface LogoProps {}

const Logo: React.FunctionComponent<LogoProps> = (props: LogoProps) => {

  const navigate = useNavigate();

  const navigateToHome = () => {
    navigate('/');
  }

  return (
    <img
      onClick={ navigateToHome }
      className={styles['header-logo']}
      src='https://http2.mlstatic.com/storage/developers-site-cms-admin/268205826549-Mercado-Libre--3-.png'/>
  );
}

export default Logo;