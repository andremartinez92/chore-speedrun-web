import { AclInput } from '@/gql/graphql';

export const apiAcl = (userId: string): AclInput => {
    return {
        users: [{ userId, read: true, write: true }],
        public: {
            read: false,
            write: false,
        },
    };
};
