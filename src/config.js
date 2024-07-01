import { LAYOUT, MENU_BEHAVIOUR, NAV_COLOR, MENU_PLACEMENT, RADIUS, THEME_COLOR, USER_ROLE } from 'constants.js';

export const IS_DEMO = false;
export const IS_AUTH_GUARD_ACTIVE = true;
export const SERVICE_URL = '/app';
export const API_URL = 'http://localhost:5134/api';
export const USE_MULTI_LANGUAGE = true;

// For detailed information: https://github.com/nfl/react-helmet#reference-guide
export const REACT_HELMET_PROPS = {
  defaultTitle: 'CNS Admin',
  titleTemplate: '%s | CNS Admin',
};

export const DEFAULT_PATHS = {
  APP: '/',
  LOGIN: '/login',
  REGISTER: '/register',
  FORGOT_PASSWORD: '/forgot-password',
  RESET_PASSWORD: '/reset-password',
  // USER_WELCOME: '/dashboards/defaul/t',
  USER_WELCOME: '/login',
  NOTFOUND: '/page-not-found',
  UNAUTHORIZED: '/unauthorized',
  INVALID_ACCESS: '/invalid-access',
};

export const DEFAULT_SETTINGS = {
  MENU_PLACEMENT: MENU_PLACEMENT.Horizontal,
  MENU_BEHAVIOUR: MENU_BEHAVIOUR.Pinned,
  LAYOUT: LAYOUT.Fluid,
  RADIUS: RADIUS.Rounded,
  COLOR: THEME_COLOR.DarkRed,
  NAV_COLOR: NAV_COLOR.Default,
  USE_SIDEBAR: false,
};

// export const DEFAULT_USER = {
//   id: 1,
//   manager_id: 1,
//   employee_no: 8877,
//   name: 'Admin',
//   thumb: '/img/profile/profile-9.webp',
//   role: USER_ROLE.Admin,
//   email: 'admin@gmail.com',
// };
export const DEFAULT_USER = {
  id: 1,
  manager_id: 1,
  employeeNo: 8877,
  name: 'Syed',
  thumb: '/img/profile/profile-9.webp',
  role: USER_ROLE.User,
  email: 'syed@gmail.com',
};
// export const DEFAULT_USER = {
//   id: 1,
//   manager_id: 1,
//   employee_no: 8877,
//   name: 'Faisal',
//   thumb: '/img/profile/profile-9.webp',
//   role: USER_ROLE.Manager,
//   email: 'Faisal@gmail.com',
// };

export const REDUX_PERSIST_KEY = 'classic-dashboard';
