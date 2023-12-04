/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n  mutation loginMutation($input: LogInInput!) {\n    logIn(input: $input) {\n      viewer {\n        sessionToken\n        user {\n          id\n          username\n        }\n      }\n    }\n  }\n": types.LoginMutationDocument,
    "\n  mutation signUpMutation($input: SignUpInput!) {\n    signUp(input: $input) {\n      viewer {\n        sessionToken\n        user {\n          id\n          username\n        }\n      }\n    }\n  }\n": types.SignUpMutationDocument,
    "\n  mutation logoutMutation($input: LogOutInput!) {\n    logOut(input: $input) {\n      ok\n    }\n  }\n": types.LogoutMutationDocument,
    "\n  query choresQuery($userId: ID!, $isCompleted: Boolean!) {\n    chores(\n      where: {\n        user: { have: { id: { equalTo: $userId } } }\n        isCompleted: { equalTo: $isCompleted }\n      }\n      order: [lastCompletedAt_ASC]\n    ) {\n      edges {\n        node {\n          id\n          name\n          recurringDays\n          isPriority\n          isCompleted\n          lastCompletedAt\n        }\n      }\n    }\n  }\n": types.ChoresQueryDocument,
    "\n  query choresSingleQuery($choreId: ID!) {\n    chore(id: $choreId) {\n      id\n      name\n      recurringDays\n      isPriority\n      isCompleted\n    }\n    events(where: { chore: { have: { id: { equalTo: $choreId } } } }) {\n      edges {\n        node {\n          id\n          name\n          chore {\n            name\n          }\n        }\n      }\n    }\n  }\n": types.ChoresSingleQueryDocument,
    "\n  mutation choresCreateMutation($input: CreateChoreInput!) {\n    createChore(input: $input) {\n      chore {\n        id\n      }\n    }\n  }\n": types.ChoresCreateMutationDocument,
    "\n  mutation choresDeleteMutation($choreId: ID!) {\n    deleteChore(input: { id: $choreId }) {\n      clientMutationId\n    }\n  }\n": types.ChoresDeleteMutationDocument,
    "\n  mutation ChoresCompletedMutation(\n    $choreId: ID!\n    $isCompleted: Boolean!\n    $lastCompletedAt: Date!\n  ) {\n    updateChore(\n      input: {\n        id: $choreId\n        fields: { isCompleted: $isCompleted, lastCompletedAt: $lastCompletedAt }\n      }\n    ) {\n      chore {\n        id\n      }\n    }\n  }\n": types.ChoresCompletedMutationDocument,
    "\n  mutation eventsCreateMutation($input: CreateEventInput!) {\n    createEvent(input: $input) {\n      event {\n        id\n      }\n    }\n  }\n": types.EventsCreateMutationDocument,
    "\n  query eventsQuery($userId: ID!) {\n    events(where: { user: { have: { id: { equalTo: $userId } } } }) {\n      edges {\n        node {\n          id\n          name\n          chore {\n            name\n          }\n        }\n      }\n    }\n  }\n": types.EventsQueryDocument,
    "\n  query eventQuery($eventId: ID!) {\n    event(id: $eventId) {\n      id\n      name\n      chore {\n        id\n        name\n      }\n    }\n\n    records(\n      where: { event: { have: { id: { equalTo: $eventId } } } }\n      order: time_ASC\n    ) {\n      edges {\n        cursor\n        node {\n          id\n          time\n          createdAt\n        }\n      }\n      pageInfo {\n        hasNextPage\n        hasPreviousPage\n        startCursor\n        endCursor\n      }\n    }\n  }\n": types.EventQueryDocument,
    "\n  mutation eventsDeleteMutation($eventId: ID!) {\n    deleteEvent(input: { id: $eventId }) {\n      clientMutationId\n    }\n  }\n": types.EventsDeleteMutationDocument,
    "\n  mutation recordsCreateMutation(\n    $choreId: ID!\n    $eventId: ID!\n    $userId: ID!\n    $time: Float!\n    $date: Date!\n  ) {\n    updateEvent(\n      input: {\n        id: $eventId\n        fields: {\n          records: {\n            createAndAdd: [\n              {\n                time: $time\n                user: { link: $userId }\n                event: { link: $eventId }\n              }\n            ]\n          }\n        }\n      }\n    ) {\n      clientMutationId\n    }\n\n    updateChore(input: { id: $choreId, fields: { lastCompletedAt: $date } }) {\n      clientMutationId\n    }\n  }\n": types.RecordsCreateMutationDocument,
    "\n  mutation recordsDeleteMutation($recordId: ID!) {\n    deleteRecord(input: { id: $recordId }) {\n      clientMutationId\n    }\n  }\n": types.RecordsDeleteMutationDocument,
    "\n  query getUser {\n    viewer {\n      sessionToken\n      user {\n        id\n        username\n      }\n    }\n  }\n": types.GetUserDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation loginMutation($input: LogInInput!) {\n    logIn(input: $input) {\n      viewer {\n        sessionToken\n        user {\n          id\n          username\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation loginMutation($input: LogInInput!) {\n    logIn(input: $input) {\n      viewer {\n        sessionToken\n        user {\n          id\n          username\n        }\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation signUpMutation($input: SignUpInput!) {\n    signUp(input: $input) {\n      viewer {\n        sessionToken\n        user {\n          id\n          username\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation signUpMutation($input: SignUpInput!) {\n    signUp(input: $input) {\n      viewer {\n        sessionToken\n        user {\n          id\n          username\n        }\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation logoutMutation($input: LogOutInput!) {\n    logOut(input: $input) {\n      ok\n    }\n  }\n"): (typeof documents)["\n  mutation logoutMutation($input: LogOutInput!) {\n    logOut(input: $input) {\n      ok\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query choresQuery($userId: ID!, $isCompleted: Boolean!) {\n    chores(\n      where: {\n        user: { have: { id: { equalTo: $userId } } }\n        isCompleted: { equalTo: $isCompleted }\n      }\n      order: [lastCompletedAt_ASC]\n    ) {\n      edges {\n        node {\n          id\n          name\n          recurringDays\n          isPriority\n          isCompleted\n          lastCompletedAt\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query choresQuery($userId: ID!, $isCompleted: Boolean!) {\n    chores(\n      where: {\n        user: { have: { id: { equalTo: $userId } } }\n        isCompleted: { equalTo: $isCompleted }\n      }\n      order: [lastCompletedAt_ASC]\n    ) {\n      edges {\n        node {\n          id\n          name\n          recurringDays\n          isPriority\n          isCompleted\n          lastCompletedAt\n        }\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query choresSingleQuery($choreId: ID!) {\n    chore(id: $choreId) {\n      id\n      name\n      recurringDays\n      isPriority\n      isCompleted\n    }\n    events(where: { chore: { have: { id: { equalTo: $choreId } } } }) {\n      edges {\n        node {\n          id\n          name\n          chore {\n            name\n          }\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query choresSingleQuery($choreId: ID!) {\n    chore(id: $choreId) {\n      id\n      name\n      recurringDays\n      isPriority\n      isCompleted\n    }\n    events(where: { chore: { have: { id: { equalTo: $choreId } } } }) {\n      edges {\n        node {\n          id\n          name\n          chore {\n            name\n          }\n        }\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation choresCreateMutation($input: CreateChoreInput!) {\n    createChore(input: $input) {\n      chore {\n        id\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation choresCreateMutation($input: CreateChoreInput!) {\n    createChore(input: $input) {\n      chore {\n        id\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation choresDeleteMutation($choreId: ID!) {\n    deleteChore(input: { id: $choreId }) {\n      clientMutationId\n    }\n  }\n"): (typeof documents)["\n  mutation choresDeleteMutation($choreId: ID!) {\n    deleteChore(input: { id: $choreId }) {\n      clientMutationId\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation ChoresCompletedMutation(\n    $choreId: ID!\n    $isCompleted: Boolean!\n    $lastCompletedAt: Date!\n  ) {\n    updateChore(\n      input: {\n        id: $choreId\n        fields: { isCompleted: $isCompleted, lastCompletedAt: $lastCompletedAt }\n      }\n    ) {\n      chore {\n        id\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation ChoresCompletedMutation(\n    $choreId: ID!\n    $isCompleted: Boolean!\n    $lastCompletedAt: Date!\n  ) {\n    updateChore(\n      input: {\n        id: $choreId\n        fields: { isCompleted: $isCompleted, lastCompletedAt: $lastCompletedAt }\n      }\n    ) {\n      chore {\n        id\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation eventsCreateMutation($input: CreateEventInput!) {\n    createEvent(input: $input) {\n      event {\n        id\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation eventsCreateMutation($input: CreateEventInput!) {\n    createEvent(input: $input) {\n      event {\n        id\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query eventsQuery($userId: ID!) {\n    events(where: { user: { have: { id: { equalTo: $userId } } } }) {\n      edges {\n        node {\n          id\n          name\n          chore {\n            name\n          }\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query eventsQuery($userId: ID!) {\n    events(where: { user: { have: { id: { equalTo: $userId } } } }) {\n      edges {\n        node {\n          id\n          name\n          chore {\n            name\n          }\n        }\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query eventQuery($eventId: ID!) {\n    event(id: $eventId) {\n      id\n      name\n      chore {\n        id\n        name\n      }\n    }\n\n    records(\n      where: { event: { have: { id: { equalTo: $eventId } } } }\n      order: time_ASC\n    ) {\n      edges {\n        cursor\n        node {\n          id\n          time\n          createdAt\n        }\n      }\n      pageInfo {\n        hasNextPage\n        hasPreviousPage\n        startCursor\n        endCursor\n      }\n    }\n  }\n"): (typeof documents)["\n  query eventQuery($eventId: ID!) {\n    event(id: $eventId) {\n      id\n      name\n      chore {\n        id\n        name\n      }\n    }\n\n    records(\n      where: { event: { have: { id: { equalTo: $eventId } } } }\n      order: time_ASC\n    ) {\n      edges {\n        cursor\n        node {\n          id\n          time\n          createdAt\n        }\n      }\n      pageInfo {\n        hasNextPage\n        hasPreviousPage\n        startCursor\n        endCursor\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation eventsDeleteMutation($eventId: ID!) {\n    deleteEvent(input: { id: $eventId }) {\n      clientMutationId\n    }\n  }\n"): (typeof documents)["\n  mutation eventsDeleteMutation($eventId: ID!) {\n    deleteEvent(input: { id: $eventId }) {\n      clientMutationId\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation recordsCreateMutation(\n    $choreId: ID!\n    $eventId: ID!\n    $userId: ID!\n    $time: Float!\n    $date: Date!\n  ) {\n    updateEvent(\n      input: {\n        id: $eventId\n        fields: {\n          records: {\n            createAndAdd: [\n              {\n                time: $time\n                user: { link: $userId }\n                event: { link: $eventId }\n              }\n            ]\n          }\n        }\n      }\n    ) {\n      clientMutationId\n    }\n\n    updateChore(input: { id: $choreId, fields: { lastCompletedAt: $date } }) {\n      clientMutationId\n    }\n  }\n"): (typeof documents)["\n  mutation recordsCreateMutation(\n    $choreId: ID!\n    $eventId: ID!\n    $userId: ID!\n    $time: Float!\n    $date: Date!\n  ) {\n    updateEvent(\n      input: {\n        id: $eventId\n        fields: {\n          records: {\n            createAndAdd: [\n              {\n                time: $time\n                user: { link: $userId }\n                event: { link: $eventId }\n              }\n            ]\n          }\n        }\n      }\n    ) {\n      clientMutationId\n    }\n\n    updateChore(input: { id: $choreId, fields: { lastCompletedAt: $date } }) {\n      clientMutationId\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation recordsDeleteMutation($recordId: ID!) {\n    deleteRecord(input: { id: $recordId }) {\n      clientMutationId\n    }\n  }\n"): (typeof documents)["\n  mutation recordsDeleteMutation($recordId: ID!) {\n    deleteRecord(input: { id: $recordId }) {\n      clientMutationId\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query getUser {\n    viewer {\n      sessionToken\n      user {\n        id\n        username\n      }\n    }\n  }\n"): (typeof documents)["\n  query getUser {\n    viewer {\n      sessionToken\n      user {\n        id\n        username\n      }\n    }\n  }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;