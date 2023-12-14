import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T
> = { [_ in K]?: never };
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never;
    };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
  BigFloat: { input: string; output: string };
  BigInt: { input: string; output: string };
  Cursor: { input: any; output: any };
  Date: { input: string; output: string };
  Datetime: { input: string; output: string };
  JSON: { input: string; output: string };
  Opaque: { input: any; output: any };
  Time: { input: string; output: string };
  UUID: { input: string; output: string };
};

/** Boolean expression comparing fields on type "BigFloat" */
export type BigFloatFilter = {
  eq?: InputMaybe<Scalars['BigFloat']['input']>;
  gt?: InputMaybe<Scalars['BigFloat']['input']>;
  gte?: InputMaybe<Scalars['BigFloat']['input']>;
  in?: InputMaybe<Array<Scalars['BigFloat']['input']>>;
  is?: InputMaybe<FilterIs>;
  lt?: InputMaybe<Scalars['BigFloat']['input']>;
  lte?: InputMaybe<Scalars['BigFloat']['input']>;
  neq?: InputMaybe<Scalars['BigFloat']['input']>;
};

/** Boolean expression comparing fields on type "BigInt" */
export type BigIntFilter = {
  eq?: InputMaybe<Scalars['BigInt']['input']>;
  gt?: InputMaybe<Scalars['BigInt']['input']>;
  gte?: InputMaybe<Scalars['BigInt']['input']>;
  in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  is?: InputMaybe<FilterIs>;
  lt?: InputMaybe<Scalars['BigInt']['input']>;
  lte?: InputMaybe<Scalars['BigInt']['input']>;
  neq?: InputMaybe<Scalars['BigInt']['input']>;
};

/** Boolean expression comparing fields on type "Boolean" */
export type BooleanFilter = {
  eq?: InputMaybe<Scalars['Boolean']['input']>;
  is?: InputMaybe<FilterIs>;
};

export type Chore = Node & {
  __typename?: 'Chore';
  created_at: Scalars['Datetime']['output'];
  eventCollection?: Maybe<EventConnection>;
  id: Scalars['UUID']['output'];
  is_completed: Scalars['Boolean']['output'];
  is_priority: Scalars['Boolean']['output'];
  last_completed_at?: Maybe<Scalars['Datetime']['output']>;
  name: Scalars['String']['output'];
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']['output'];
  profile: Profile;
  profile_id: Scalars['UUID']['output'];
  recurring_days: Scalars['Int']['output'];
};

export type ChoreEventCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<EventFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<EventOrderBy>>;
};

export type ChoreConnection = {
  __typename?: 'ChoreConnection';
  edges: Array<ChoreEdge>;
  pageInfo: PageInfo;
};

export type ChoreDeleteResponse = {
  __typename?: 'ChoreDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Chore>;
};

export type ChoreEdge = {
  __typename?: 'ChoreEdge';
  cursor: Scalars['String']['output'];
  node: Chore;
};

export type ChoreFilter = {
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<ChoreFilter>>;
  created_at?: InputMaybe<DatetimeFilter>;
  id?: InputMaybe<UuidFilter>;
  is_completed?: InputMaybe<BooleanFilter>;
  is_priority?: InputMaybe<BooleanFilter>;
  last_completed_at?: InputMaybe<DatetimeFilter>;
  name?: InputMaybe<StringFilter>;
  nodeId?: InputMaybe<IdFilter>;
  /** Negates a filter */
  not?: InputMaybe<ChoreFilter>;
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<ChoreFilter>>;
  profile_id?: InputMaybe<UuidFilter>;
  recurring_days?: InputMaybe<IntFilter>;
};

export type ChoreInsertInput = {
  created_at?: InputMaybe<Scalars['Datetime']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  is_completed?: InputMaybe<Scalars['Boolean']['input']>;
  is_priority?: InputMaybe<Scalars['Boolean']['input']>;
  last_completed_at?: InputMaybe<Scalars['Datetime']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  profile_id?: InputMaybe<Scalars['UUID']['input']>;
  recurring_days?: InputMaybe<Scalars['Int']['input']>;
};

export type ChoreInsertResponse = {
  __typename?: 'ChoreInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Chore>;
};

export type ChoreOrderBy = {
  created_at?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  is_completed?: InputMaybe<OrderByDirection>;
  is_priority?: InputMaybe<OrderByDirection>;
  last_completed_at?: InputMaybe<OrderByDirection>;
  name?: InputMaybe<OrderByDirection>;
  profile_id?: InputMaybe<OrderByDirection>;
  recurring_days?: InputMaybe<OrderByDirection>;
};

export type ChoreUpdateInput = {
  created_at?: InputMaybe<Scalars['Datetime']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  is_completed?: InputMaybe<Scalars['Boolean']['input']>;
  is_priority?: InputMaybe<Scalars['Boolean']['input']>;
  last_completed_at?: InputMaybe<Scalars['Datetime']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  profile_id?: InputMaybe<Scalars['UUID']['input']>;
  recurring_days?: InputMaybe<Scalars['Int']['input']>;
};

export type ChoreUpdateResponse = {
  __typename?: 'ChoreUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Chore>;
};

/** Boolean expression comparing fields on type "Date" */
export type DateFilter = {
  eq?: InputMaybe<Scalars['Date']['input']>;
  gt?: InputMaybe<Scalars['Date']['input']>;
  gte?: InputMaybe<Scalars['Date']['input']>;
  in?: InputMaybe<Array<Scalars['Date']['input']>>;
  is?: InputMaybe<FilterIs>;
  lt?: InputMaybe<Scalars['Date']['input']>;
  lte?: InputMaybe<Scalars['Date']['input']>;
  neq?: InputMaybe<Scalars['Date']['input']>;
};

/** Boolean expression comparing fields on type "Datetime" */
export type DatetimeFilter = {
  eq?: InputMaybe<Scalars['Datetime']['input']>;
  gt?: InputMaybe<Scalars['Datetime']['input']>;
  gte?: InputMaybe<Scalars['Datetime']['input']>;
  in?: InputMaybe<Array<Scalars['Datetime']['input']>>;
  is?: InputMaybe<FilterIs>;
  lt?: InputMaybe<Scalars['Datetime']['input']>;
  lte?: InputMaybe<Scalars['Datetime']['input']>;
  neq?: InputMaybe<Scalars['Datetime']['input']>;
};

export type Event = Node & {
  __typename?: 'Event';
  chore: Chore;
  chore_id: Scalars['UUID']['output'];
  created_at: Scalars['Datetime']['output'];
  id: Scalars['UUID']['output'];
  name: Scalars['String']['output'];
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']['output'];
  profile: Profile;
  profile_id: Scalars['UUID']['output'];
  recordCollection?: Maybe<RecordConnection>;
};

export type EventRecordCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<RecordFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<RecordOrderBy>>;
};

export type EventConnection = {
  __typename?: 'EventConnection';
  edges: Array<EventEdge>;
  pageInfo: PageInfo;
};

export type EventDeleteResponse = {
  __typename?: 'EventDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Event>;
};

export type EventEdge = {
  __typename?: 'EventEdge';
  cursor: Scalars['String']['output'];
  node: Event;
};

export type EventFilter = {
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<EventFilter>>;
  chore_id?: InputMaybe<UuidFilter>;
  created_at?: InputMaybe<DatetimeFilter>;
  id?: InputMaybe<UuidFilter>;
  name?: InputMaybe<StringFilter>;
  nodeId?: InputMaybe<IdFilter>;
  /** Negates a filter */
  not?: InputMaybe<EventFilter>;
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<EventFilter>>;
  profile_id?: InputMaybe<UuidFilter>;
};

export type EventInsertInput = {
  chore_id?: InputMaybe<Scalars['UUID']['input']>;
  created_at?: InputMaybe<Scalars['Datetime']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  profile_id?: InputMaybe<Scalars['UUID']['input']>;
};

export type EventInsertResponse = {
  __typename?: 'EventInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Event>;
};

export type EventOrderBy = {
  chore_id?: InputMaybe<OrderByDirection>;
  created_at?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  name?: InputMaybe<OrderByDirection>;
  profile_id?: InputMaybe<OrderByDirection>;
};

export type EventUpdateInput = {
  chore_id?: InputMaybe<Scalars['UUID']['input']>;
  created_at?: InputMaybe<Scalars['Datetime']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  profile_id?: InputMaybe<Scalars['UUID']['input']>;
};

export type EventUpdateResponse = {
  __typename?: 'EventUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Event>;
};

export enum FilterIs {
  NotNull = 'NOT_NULL',
  Null = 'NULL',
}

/** Boolean expression comparing fields on type "Float" */
export type FloatFilter = {
  eq?: InputMaybe<Scalars['Float']['input']>;
  gt?: InputMaybe<Scalars['Float']['input']>;
  gte?: InputMaybe<Scalars['Float']['input']>;
  in?: InputMaybe<Array<Scalars['Float']['input']>>;
  is?: InputMaybe<FilterIs>;
  lt?: InputMaybe<Scalars['Float']['input']>;
  lte?: InputMaybe<Scalars['Float']['input']>;
  neq?: InputMaybe<Scalars['Float']['input']>;
};

/** Boolean expression comparing fields on type "ID" */
export type IdFilter = {
  eq?: InputMaybe<Scalars['ID']['input']>;
};

/** Boolean expression comparing fields on type "Int" */
export type IntFilter = {
  eq?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<Scalars['Int']['input']>>;
  is?: InputMaybe<FilterIs>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  neq?: InputMaybe<Scalars['Int']['input']>;
};

/** The root type for creating and mutating data */
export type Mutation = {
  __typename?: 'Mutation';
  /** Deletes zero or more records from the `Chore` collection */
  deleteFromChoreCollection: ChoreDeleteResponse;
  /** Deletes zero or more records from the `Event` collection */
  deleteFromEventCollection: EventDeleteResponse;
  /** Deletes zero or more records from the `Profile` collection */
  deleteFromProfileCollection: ProfileDeleteResponse;
  /** Deletes zero or more records from the `Record` collection */
  deleteFromRecordCollection: RecordDeleteResponse;
  /** Adds one or more `Chore` records to the collection */
  insertIntoChoreCollection?: Maybe<ChoreInsertResponse>;
  /** Adds one or more `Event` records to the collection */
  insertIntoEventCollection?: Maybe<EventInsertResponse>;
  /** Adds one or more `Profile` records to the collection */
  insertIntoProfileCollection?: Maybe<ProfileInsertResponse>;
  /** Adds one or more `Record` records to the collection */
  insertIntoRecordCollection?: Maybe<RecordInsertResponse>;
  /** Updates zero or more records in the `Chore` collection */
  updateChoreCollection: ChoreUpdateResponse;
  /** Updates zero or more records in the `Event` collection */
  updateEventCollection: EventUpdateResponse;
  /** Updates zero or more records in the `Profile` collection */
  updateProfileCollection: ProfileUpdateResponse;
  /** Updates zero or more records in the `Record` collection */
  updateRecordCollection: RecordUpdateResponse;
};

/** The root type for creating and mutating data */
export type MutationDeleteFromChoreCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<ChoreFilter>;
};

/** The root type for creating and mutating data */
export type MutationDeleteFromEventCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<EventFilter>;
};

/** The root type for creating and mutating data */
export type MutationDeleteFromProfileCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<ProfileFilter>;
};

/** The root type for creating and mutating data */
export type MutationDeleteFromRecordCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<RecordFilter>;
};

/** The root type for creating and mutating data */
export type MutationInsertIntoChoreCollectionArgs = {
  objects: Array<ChoreInsertInput>;
};

/** The root type for creating and mutating data */
export type MutationInsertIntoEventCollectionArgs = {
  objects: Array<EventInsertInput>;
};

/** The root type for creating and mutating data */
export type MutationInsertIntoProfileCollectionArgs = {
  objects: Array<ProfileInsertInput>;
};

/** The root type for creating and mutating data */
export type MutationInsertIntoRecordCollectionArgs = {
  objects: Array<RecordInsertInput>;
};

/** The root type for creating and mutating data */
export type MutationUpdateChoreCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<ChoreFilter>;
  set: ChoreUpdateInput;
};

/** The root type for creating and mutating data */
export type MutationUpdateEventCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<EventFilter>;
  set: EventUpdateInput;
};

/** The root type for creating and mutating data */
export type MutationUpdateProfileCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<ProfileFilter>;
  set: ProfileUpdateInput;
};

/** The root type for creating and mutating data */
export type MutationUpdateRecordCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<RecordFilter>;
  set: RecordUpdateInput;
};

export type Node = {
  /** Retrieves a record by `ID` */
  nodeId: Scalars['ID']['output'];
};

/** Boolean expression comparing fields on type "Opaque" */
export type OpaqueFilter = {
  eq?: InputMaybe<Scalars['Opaque']['input']>;
  is?: InputMaybe<FilterIs>;
};

/** Defines a per-field sorting order */
export enum OrderByDirection {
  /** Ascending order, nulls first */
  AscNullsFirst = 'AscNullsFirst',
  /** Ascending order, nulls last */
  AscNullsLast = 'AscNullsLast',
  /** Descending order, nulls first */
  DescNullsFirst = 'DescNullsFirst',
  /** Descending order, nulls last */
  DescNullsLast = 'DescNullsLast',
}

export type PageInfo = {
  __typename?: 'PageInfo';
  endCursor?: Maybe<Scalars['String']['output']>;
  hasNextPage: Scalars['Boolean']['output'];
  hasPreviousPage: Scalars['Boolean']['output'];
  startCursor?: Maybe<Scalars['String']['output']>;
};

export type Profile = Node & {
  __typename?: 'Profile';
  choreCollection?: Maybe<ChoreConnection>;
  eventCollection?: Maybe<EventConnection>;
  id: Scalars['UUID']['output'];
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']['output'];
  recordCollection?: Maybe<RecordConnection>;
  updated_at?: Maybe<Scalars['Datetime']['output']>;
  username: Scalars['String']['output'];
};

export type ProfileChoreCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<ChoreFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ChoreOrderBy>>;
};

export type ProfileEventCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<EventFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<EventOrderBy>>;
};

export type ProfileRecordCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<RecordFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<RecordOrderBy>>;
};

export type ProfileConnection = {
  __typename?: 'ProfileConnection';
  edges: Array<ProfileEdge>;
  pageInfo: PageInfo;
};

export type ProfileDeleteResponse = {
  __typename?: 'ProfileDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Profile>;
};

export type ProfileEdge = {
  __typename?: 'ProfileEdge';
  cursor: Scalars['String']['output'];
  node: Profile;
};

export type ProfileFilter = {
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<ProfileFilter>>;
  id?: InputMaybe<UuidFilter>;
  nodeId?: InputMaybe<IdFilter>;
  /** Negates a filter */
  not?: InputMaybe<ProfileFilter>;
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<ProfileFilter>>;
  updated_at?: InputMaybe<DatetimeFilter>;
  username?: InputMaybe<StringFilter>;
};

export type ProfileInsertInput = {
  id?: InputMaybe<Scalars['UUID']['input']>;
  updated_at?: InputMaybe<Scalars['Datetime']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
};

export type ProfileInsertResponse = {
  __typename?: 'ProfileInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Profile>;
};

export type ProfileOrderBy = {
  id?: InputMaybe<OrderByDirection>;
  updated_at?: InputMaybe<OrderByDirection>;
  username?: InputMaybe<OrderByDirection>;
};

export type ProfileUpdateInput = {
  id?: InputMaybe<Scalars['UUID']['input']>;
  updated_at?: InputMaybe<Scalars['Datetime']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
};

export type ProfileUpdateResponse = {
  __typename?: 'ProfileUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Profile>;
};

/** The root type for querying data */
export type Query = {
  __typename?: 'Query';
  /** A pagable collection of type `Chore` */
  choreCollection?: Maybe<ChoreConnection>;
  /** A pagable collection of type `Event` */
  eventCollection?: Maybe<EventConnection>;
  /** Retrieve a record by its `ID` */
  node?: Maybe<Node>;
  /** A pagable collection of type `Profile` */
  profileCollection?: Maybe<ProfileConnection>;
  /** A pagable collection of type `Record` */
  recordCollection?: Maybe<RecordConnection>;
};

/** The root type for querying data */
export type QueryChoreCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<ChoreFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ChoreOrderBy>>;
};

/** The root type for querying data */
export type QueryEventCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<EventFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<EventOrderBy>>;
};

/** The root type for querying data */
export type QueryNodeArgs = {
  nodeId: Scalars['ID']['input'];
};

/** The root type for querying data */
export type QueryProfileCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<ProfileFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ProfileOrderBy>>;
};

/** The root type for querying data */
export type QueryRecordCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<RecordFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<RecordOrderBy>>;
};

export type Record = Node & {
  __typename?: 'Record';
  created_at: Scalars['Datetime']['output'];
  event: Event;
  event_id: Scalars['UUID']['output'];
  id: Scalars['UUID']['output'];
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']['output'];
  profile: Profile;
  profile_id: Scalars['UUID']['output'];
  time: Scalars['BigInt']['output'];
};

export type RecordConnection = {
  __typename?: 'RecordConnection';
  edges: Array<RecordEdge>;
  pageInfo: PageInfo;
};

export type RecordDeleteResponse = {
  __typename?: 'RecordDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Record>;
};

export type RecordEdge = {
  __typename?: 'RecordEdge';
  cursor: Scalars['String']['output'];
  node: Record;
};

export type RecordFilter = {
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<RecordFilter>>;
  created_at?: InputMaybe<DatetimeFilter>;
  event_id?: InputMaybe<UuidFilter>;
  id?: InputMaybe<UuidFilter>;
  nodeId?: InputMaybe<IdFilter>;
  /** Negates a filter */
  not?: InputMaybe<RecordFilter>;
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<RecordFilter>>;
  profile_id?: InputMaybe<UuidFilter>;
  time?: InputMaybe<BigIntFilter>;
};

export type RecordInsertInput = {
  created_at?: InputMaybe<Scalars['Datetime']['input']>;
  event_id?: InputMaybe<Scalars['UUID']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  profile_id?: InputMaybe<Scalars['UUID']['input']>;
  time?: InputMaybe<Scalars['BigInt']['input']>;
};

export type RecordInsertResponse = {
  __typename?: 'RecordInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Record>;
};

export type RecordOrderBy = {
  created_at?: InputMaybe<OrderByDirection>;
  event_id?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  profile_id?: InputMaybe<OrderByDirection>;
  time?: InputMaybe<OrderByDirection>;
};

export type RecordUpdateInput = {
  created_at?: InputMaybe<Scalars['Datetime']['input']>;
  event_id?: InputMaybe<Scalars['UUID']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  profile_id?: InputMaybe<Scalars['UUID']['input']>;
  time?: InputMaybe<Scalars['BigInt']['input']>;
};

export type RecordUpdateResponse = {
  __typename?: 'RecordUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Record>;
};

/** Boolean expression comparing fields on type "String" */
export type StringFilter = {
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  iregex?: InputMaybe<Scalars['String']['input']>;
  is?: InputMaybe<FilterIs>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  neq?: InputMaybe<Scalars['String']['input']>;
  regex?: InputMaybe<Scalars['String']['input']>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

/** Boolean expression comparing fields on type "Time" */
export type TimeFilter = {
  eq?: InputMaybe<Scalars['Time']['input']>;
  gt?: InputMaybe<Scalars['Time']['input']>;
  gte?: InputMaybe<Scalars['Time']['input']>;
  in?: InputMaybe<Array<Scalars['Time']['input']>>;
  is?: InputMaybe<FilterIs>;
  lt?: InputMaybe<Scalars['Time']['input']>;
  lte?: InputMaybe<Scalars['Time']['input']>;
  neq?: InputMaybe<Scalars['Time']['input']>;
};

/** Boolean expression comparing fields on type "UUID" */
export type UuidFilter = {
  eq?: InputMaybe<Scalars['UUID']['input']>;
  in?: InputMaybe<Array<Scalars['UUID']['input']>>;
  is?: InputMaybe<FilterIs>;
  neq?: InputMaybe<Scalars['UUID']['input']>;
};

export type GetChoresQueryVariables = Exact<{
  isCompleted: Scalars['Boolean']['input'];
}>;

export type GetChoresQuery = {
  __typename?: 'Query';
  choreCollection?: {
    __typename?: 'ChoreConnection';
    edges: Array<{
      __typename?: 'ChoreEdge';
      node: {
        __typename?: 'Chore';
        id: string;
        name: string;
        recurring_days: number;
        is_priority: boolean;
        last_completed_at?: string | null;
        is_completed: boolean;
      };
    }>;
  } | null;
};

export type GetChoreEventsQueryVariables = Exact<{
  choreId: Scalars['UUID']['input'];
}>;

export type GetChoreEventsQuery = {
  __typename?: 'Query';
  choreCollection?: {
    __typename?: 'ChoreConnection';
    edges: Array<{
      __typename?: 'ChoreEdge';
      node: {
        __typename?: 'Chore';
        name: string;
        eventCollection?: {
          __typename?: 'EventConnection';
          edges: Array<{
            __typename?: 'EventEdge';
            node: { __typename?: 'Event'; id: string; name: string };
          }>;
        } | null;
      };
    }>;
  } | null;
};

export type CreateEventMutationVariables = Exact<{
  name: Scalars['String']['input'];
  choreId: Scalars['UUID']['input'];
}>;

export type CreateEventMutation = {
  __typename?: 'Mutation';
  insertIntoEventCollection?: {
    __typename?: 'EventInsertResponse';
    affectedCount: number;
  } | null;
};

export type CompleteChoreMutationVariables = Exact<{
  choreId: Scalars['UUID']['input'];
  lastCompletedAt?: InputMaybe<Scalars['Datetime']['input']>;
  isCompleted: Scalars['Boolean']['input'];
}>;

export type CompleteChoreMutation = {
  __typename?: 'Mutation';
  updateChoreCollection: {
    __typename?: 'ChoreUpdateResponse';
    affectedCount: number;
    records: Array<{ __typename?: 'Chore'; id: string; is_completed: boolean }>;
  };
};

export type DeleteChoreMutationVariables = Exact<{
  choreId: Scalars['UUID']['input'];
}>;

export type DeleteChoreMutation = {
  __typename?: 'Mutation';
  deleteFromChoreCollection: {
    __typename?: 'ChoreDeleteResponse';
    affectedCount: number;
  };
};

export type CreateChoreMutationVariables = Exact<{
  name: Scalars['String']['input'];
  recurringDays: Scalars['Int']['input'];
  isPriority: Scalars['Boolean']['input'];
}>;

export type CreateChoreMutation = {
  __typename?: 'Mutation';
  insertIntoChoreCollection?: {
    __typename?: 'ChoreInsertResponse';
    affectedCount: number;
  } | null;
};

export const GetChoresDocument = gql`
  query GetChores($isCompleted: Boolean!) {
    choreCollection(
      filter: { is_completed: { eq: $isCompleted } }
      orderBy: [
        { is_priority: AscNullsLast, last_completed_at: DescNullsFirst }
      ]
    ) {
      edges {
        node {
          id
          name
          recurring_days
          is_priority
          last_completed_at
          is_completed
        }
      }
    }
  }
`;

/**
 * __useGetChoresQuery__
 *
 * To run a query within a React component, call `useGetChoresQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetChoresQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetChoresQuery({
 *   variables: {
 *      isCompleted: // value for 'isCompleted'
 *   },
 * });
 */
export function useGetChoresQuery(
  baseOptions: Apollo.QueryHookOptions<GetChoresQuery, GetChoresQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetChoresQuery, GetChoresQueryVariables>(
    GetChoresDocument,
    options
  );
}
export function useGetChoresLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetChoresQuery,
    GetChoresQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetChoresQuery, GetChoresQueryVariables>(
    GetChoresDocument,
    options
  );
}
export function useGetChoresSuspenseQuery(
  baseOptions?: Apollo.SuspenseQueryHookOptions<
    GetChoresQuery,
    GetChoresQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<GetChoresQuery, GetChoresQueryVariables>(
    GetChoresDocument,
    options
  );
}
export type GetChoresQueryHookResult = ReturnType<typeof useGetChoresQuery>;
export type GetChoresLazyQueryHookResult = ReturnType<
  typeof useGetChoresLazyQuery
>;
export type GetChoresSuspenseQueryHookResult = ReturnType<
  typeof useGetChoresSuspenseQuery
>;
export type GetChoresQueryResult = Apollo.QueryResult<
  GetChoresQuery,
  GetChoresQueryVariables
>;
export const GetChoreEventsDocument = gql`
  query GetChoreEvents($choreId: UUID!) {
    choreCollection(filter: { id: { eq: $choreId } }) {
      edges {
        node {
          name
          eventCollection(orderBy: [{ name: AscNullsLast }]) {
            edges {
              node {
                id
                name
              }
            }
          }
        }
      }
    }
  }
`;

/**
 * __useGetChoreEventsQuery__
 *
 * To run a query within a React component, call `useGetChoreEventsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetChoreEventsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetChoreEventsQuery({
 *   variables: {
 *      choreId: // value for 'choreId'
 *   },
 * });
 */
export function useGetChoreEventsQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetChoreEventsQuery,
    GetChoreEventsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetChoreEventsQuery, GetChoreEventsQueryVariables>(
    GetChoreEventsDocument,
    options
  );
}
export function useGetChoreEventsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetChoreEventsQuery,
    GetChoreEventsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetChoreEventsQuery, GetChoreEventsQueryVariables>(
    GetChoreEventsDocument,
    options
  );
}
export function useGetChoreEventsSuspenseQuery(
  baseOptions?: Apollo.SuspenseQueryHookOptions<
    GetChoreEventsQuery,
    GetChoreEventsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<
    GetChoreEventsQuery,
    GetChoreEventsQueryVariables
  >(GetChoreEventsDocument, options);
}
export type GetChoreEventsQueryHookResult = ReturnType<
  typeof useGetChoreEventsQuery
>;
export type GetChoreEventsLazyQueryHookResult = ReturnType<
  typeof useGetChoreEventsLazyQuery
>;
export type GetChoreEventsSuspenseQueryHookResult = ReturnType<
  typeof useGetChoreEventsSuspenseQuery
>;
export type GetChoreEventsQueryResult = Apollo.QueryResult<
  GetChoreEventsQuery,
  GetChoreEventsQueryVariables
>;
export const CreateEventDocument = gql`
  mutation CreateEvent($name: String!, $choreId: UUID!) {
    insertIntoEventCollection(objects: [{ name: $name, chore_id: $choreId }]) {
      affectedCount
    }
  }
`;
export type CreateEventMutationFn = Apollo.MutationFunction<
  CreateEventMutation,
  CreateEventMutationVariables
>;

/**
 * __useCreateEventMutation__
 *
 * To run a mutation, you first call `useCreateEventMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateEventMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createEventMutation, { data, loading, error }] = useCreateEventMutation({
 *   variables: {
 *      name: // value for 'name'
 *      choreId: // value for 'choreId'
 *   },
 * });
 */
export function useCreateEventMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateEventMutation,
    CreateEventMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<CreateEventMutation, CreateEventMutationVariables>(
    CreateEventDocument,
    options
  );
}
export type CreateEventMutationHookResult = ReturnType<
  typeof useCreateEventMutation
>;
export type CreateEventMutationResult =
  Apollo.MutationResult<CreateEventMutation>;
export type CreateEventMutationOptions = Apollo.BaseMutationOptions<
  CreateEventMutation,
  CreateEventMutationVariables
>;
export const CompleteChoreDocument = gql`
  mutation CompleteChore(
    $choreId: UUID!
    $lastCompletedAt: Datetime
    $isCompleted: Boolean!
  ) {
    updateChoreCollection(
      filter: { id: { eq: $choreId } }
      set: { is_completed: $isCompleted, last_completed_at: $lastCompletedAt }
    ) {
      affectedCount
      records {
        id
        is_completed
      }
    }
  }
`;
export type CompleteChoreMutationFn = Apollo.MutationFunction<
  CompleteChoreMutation,
  CompleteChoreMutationVariables
>;

/**
 * __useCompleteChoreMutation__
 *
 * To run a mutation, you first call `useCompleteChoreMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCompleteChoreMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [completeChoreMutation, { data, loading, error }] = useCompleteChoreMutation({
 *   variables: {
 *      choreId: // value for 'choreId'
 *      lastCompletedAt: // value for 'lastCompletedAt'
 *      isCompleted: // value for 'isCompleted'
 *   },
 * });
 */
export function useCompleteChoreMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CompleteChoreMutation,
    CompleteChoreMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    CompleteChoreMutation,
    CompleteChoreMutationVariables
  >(CompleteChoreDocument, options);
}
export type CompleteChoreMutationHookResult = ReturnType<
  typeof useCompleteChoreMutation
>;
export type CompleteChoreMutationResult =
  Apollo.MutationResult<CompleteChoreMutation>;
export type CompleteChoreMutationOptions = Apollo.BaseMutationOptions<
  CompleteChoreMutation,
  CompleteChoreMutationVariables
>;
export const DeleteChoreDocument = gql`
  mutation DeleteChore($choreId: UUID!) {
    deleteFromChoreCollection(filter: { id: { eq: $choreId } }) {
      affectedCount
    }
  }
`;
export type DeleteChoreMutationFn = Apollo.MutationFunction<
  DeleteChoreMutation,
  DeleteChoreMutationVariables
>;

/**
 * __useDeleteChoreMutation__
 *
 * To run a mutation, you first call `useDeleteChoreMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteChoreMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteChoreMutation, { data, loading, error }] = useDeleteChoreMutation({
 *   variables: {
 *      choreId: // value for 'choreId'
 *   },
 * });
 */
export function useDeleteChoreMutation(
  baseOptions?: Apollo.MutationHookOptions<
    DeleteChoreMutation,
    DeleteChoreMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<DeleteChoreMutation, DeleteChoreMutationVariables>(
    DeleteChoreDocument,
    options
  );
}
export type DeleteChoreMutationHookResult = ReturnType<
  typeof useDeleteChoreMutation
>;
export type DeleteChoreMutationResult =
  Apollo.MutationResult<DeleteChoreMutation>;
export type DeleteChoreMutationOptions = Apollo.BaseMutationOptions<
  DeleteChoreMutation,
  DeleteChoreMutationVariables
>;
export const CreateChoreDocument = gql`
  mutation CreateChore(
    $name: String!
    $recurringDays: Int!
    $isPriority: Boolean!
  ) {
    insertIntoChoreCollection(
      objects: [
        {
          name: $name
          recurring_days: $recurringDays
          is_priority: $isPriority
        }
      ]
    ) {
      affectedCount
    }
  }
`;
export type CreateChoreMutationFn = Apollo.MutationFunction<
  CreateChoreMutation,
  CreateChoreMutationVariables
>;

/**
 * __useCreateChoreMutation__
 *
 * To run a mutation, you first call `useCreateChoreMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateChoreMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createChoreMutation, { data, loading, error }] = useCreateChoreMutation({
 *   variables: {
 *      name: // value for 'name'
 *      recurringDays: // value for 'recurringDays'
 *      isPriority: // value for 'isPriority'
 *   },
 * });
 */
export function useCreateChoreMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateChoreMutation,
    CreateChoreMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<CreateChoreMutation, CreateChoreMutationVariables>(
    CreateChoreDocument,
    options
  );
}
export type CreateChoreMutationHookResult = ReturnType<
  typeof useCreateChoreMutation
>;
export type CreateChoreMutationResult =
  Apollo.MutationResult<CreateChoreMutation>;
export type CreateChoreMutationOptions = Apollo.BaseMutationOptions<
  CreateChoreMutation,
  CreateChoreMutationVariables
>;
