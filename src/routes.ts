export const HOME_ROUTE = '/';

export const AUTH_ROUTE = '/auth';
export const AUTH_SIGN_IN_ROUTE = `${AUTH_ROUTE}/sign-in`;
export const AUTH_REGISTER_ROUTE = `${AUTH_SIGN_IN_ROUTE}?tab=register`;
export const AUTH_LOGIN_ROUTE = `${AUTH_SIGN_IN_ROUTE}?tab=login`;

export const AUTH_CALLBACK_ROUTE = `${AUTH_ROUTE}/callback`;
export const AUTH_CODE_ERROR_ROUTE = `${AUTH_ROUTE}/auth-code-error`;

export const CHORES_ROUTE = '/chores';
export const CHORE_ROUTE = `${CHORES_ROUTE}/[id]`;
export const getChoreRoute = (choreId: string) =>
  CHORE_ROUTE.replace('[id]', choreId);

export const CREATE_CHORE_ROUTE = '/create-chore';
