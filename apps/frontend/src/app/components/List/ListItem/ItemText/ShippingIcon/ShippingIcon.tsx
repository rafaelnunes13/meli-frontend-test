import { FaTruck } from 'react-icons/fa';

export interface IShippingIconProps {
  freeShipping: boolean;
}

const ShippingIcon: React.FunctionComponent<IShippingIconProps> = (props) => {
  return props.freeShipping ? <FaTruck color='#02b902'/> : null;
}

export default ShippingIcon;