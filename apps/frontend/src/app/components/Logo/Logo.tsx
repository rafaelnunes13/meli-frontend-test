import { useNavigate } from 'react-router';
import styles from './Logo.module.scss';

const Logo: React.FunctionComponent = () => {

  const navigate = useNavigate();

  const navigateToHome = () => {
    navigate('/');
  }

  return (
    <img
      onClick={ navigateToHome }
      className={styles['header-logo']}
      alt='header logo'
      src='https://http2.mlstatic.com/storage/developers-site-cms-admin/268205826549-Mercado-Libre--3-.png'/>
  );
}

export default Logo;