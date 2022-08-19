import {Constants} from '../constants';

export const servers = [
  {
    id: 1,
    name: 'Japan',
    image: Constants.Japan_flag,
    host: 'public-vpn-94.opengw.net 443',
    selected: true,
    favourite: 0,
  },
  {
    id: 2,
    name: 'Korea',
    image: Constants.Korea_flag,
    host: 'vpn110532732.opengw.net 1920',
    selected: false,
    favourite: 0,
  },

  {
    id: 3,
    name: 'Singapore',
    image: Constants.Singapore_flag,
    host: 'vpn126587861.opengw.net 1633',
    selected: false,
    favourite: 0,
  },
  {
    id: 4,
    name: 'Russia',
    image: Constants.Russia_flag,
    host: 'vpn789847482.opengw.net 1443',
    selected: false,
    favourite: 0,
  },
  {
    id: 5,
    name: 'Indonesia',
    image: Constants.Indonesia_flag,
    host: 'vpn782168883.opengw.net 1653',
    selected: false,
    favourite: 0,
  },
];
export const plans = [
  {duration: '1 Month', price: '12.99'},
  {duration: '6 Month', price: '19.99'},
  {duration: '1 Year', price: '49.99'},
];
