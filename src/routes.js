import Chat from './components/Chat';
import Login from './components/Login';
import { CHAT_ROUTE, LOGIN_ROUTE } from './util/const';

export const publicRoute = {
  path: LOGIN_ROUTE,
  Component: Login,
};
export const privateRoute = {
  path: CHAT_ROUTE,
  Component: Chat,
};
