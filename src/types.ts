import { User, Viewer } from './gql/graphql';

export enum UserAction {
    LOGIN = 'LOGIN',
    LOGOUT = 'LOGOUT',
}

export type UserType = {
    sessionToken?: Viewer['sessionToken'];
    user: Partial<User>;
};
