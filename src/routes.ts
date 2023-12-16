export const HOME_ROUTE = '/';

export const SIGN_IN_ROUTE = '/auth/sign-in';

export const CHORES_ROUTE = '/chores';
export const CHORE_ROUTE = `${CHORES_ROUTE}/[id]`;
export const getChoreRoute = (choreId: string) =>
  CHORE_ROUTE.replace('[id]', choreId);

export const CREATE_CHORE_ROUTE = '/create-chore';

export const EVENTS_ROUTE = '/events';
export const EVENT_ROUTE = `${EVENTS_ROUTE}/[id]`;
export const getEventRoute = (choreId: string) =>
  EVENT_ROUTE.replace('[id]', choreId);

export const CREATE_EVENT_ROUTE = `/create-event`;
