/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  Any: { input: any; output: any; }
  Bytes: { input: any; output: any; }
  Date: { input: any; output: any; }
  File: { input: any; output: any; }
  Object: { input: any; output: any; }
  Upload: { input: any; output: any; }
};

export type Acl = {
  __typename?: 'ACL';
  public?: Maybe<PublicAcl>;
  roles?: Maybe<Array<RoleAcl>>;
  users?: Maybe<Array<UserAcl>>;
};

export type AclInput = {
  public?: InputMaybe<PublicAclInput>;
  roles?: InputMaybe<Array<RoleAclInput>>;
  users?: InputMaybe<Array<UserAclInput>>;
};

export type ArrayResult = Chore | Element | Event | Record | Role | Session | User;

export type ArrayWhereInput = {
  containedBy?: InputMaybe<Array<InputMaybe<Scalars['Any']['input']>>>;
  contains?: InputMaybe<Array<InputMaybe<Scalars['Any']['input']>>>;
  equalTo?: InputMaybe<Scalars['Any']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greaterThan?: InputMaybe<Scalars['Any']['input']>;
  greaterThanOrEqualTo?: InputMaybe<Scalars['Any']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Any']['input']>>>;
  inQueryKey?: InputMaybe<SelectInput>;
  lessThan?: InputMaybe<Scalars['Any']['input']>;
  lessThanOrEqualTo?: InputMaybe<Scalars['Any']['input']>;
  notEqualTo?: InputMaybe<Scalars['Any']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Any']['input']>>>;
  notInQueryKey?: InputMaybe<SelectInput>;
};

export type BooleanWhereInput = {
  equalTo?: InputMaybe<Scalars['Boolean']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  inQueryKey?: InputMaybe<SelectInput>;
  notEqualTo?: InputMaybe<Scalars['Boolean']['input']>;
  notInQueryKey?: InputMaybe<SelectInput>;
};

export type BoxInput = {
  bottomLeft: GeoPointInput;
  upperRight: GeoPointInput;
};

export type BytesWhereInput = {
  equalTo?: InputMaybe<Scalars['Bytes']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greaterThan?: InputMaybe<Scalars['Bytes']['input']>;
  greaterThanOrEqualTo?: InputMaybe<Scalars['Bytes']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Bytes']['input']>>>;
  inQueryKey?: InputMaybe<SelectInput>;
  lessThan?: InputMaybe<Scalars['Bytes']['input']>;
  lessThanOrEqualTo?: InputMaybe<Scalars['Bytes']['input']>;
  notEqualTo?: InputMaybe<Scalars['Bytes']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Bytes']['input']>>>;
  notInQueryKey?: InputMaybe<SelectInput>;
};

export type CenterSphereInput = {
  center: GeoPointInput;
  distance: Scalars['Float']['input'];
};

export type Chore = Node & ParseObject & {
  __typename?: 'Chore';
  ACL: Acl;
  createdAt: Scalars['Date']['output'];
  events: EventConnection;
  id: Scalars['ID']['output'];
  isCompleted: Scalars['Boolean']['output'];
  isPriority: Scalars['Boolean']['output'];
  lastCompletedAt?: Maybe<Scalars['Date']['output']>;
  name: Scalars['String']['output'];
  objectId: Scalars['ID']['output'];
  recurringDays: Scalars['Float']['output'];
  updatedAt: Scalars['Date']['output'];
  user: User;
};


export type ChoreEventsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  options?: InputMaybe<ReadOptionsInput>;
  order?: InputMaybe<Array<EventOrder>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<EventWhereInput>;
};

export type ChoreConnection = {
  __typename?: 'ChoreConnection';
  count: Scalars['Int']['output'];
  edges?: Maybe<Array<Maybe<ChoreEdge>>>;
  pageInfo: PageInfo;
};

export type ChoreEdge = {
  __typename?: 'ChoreEdge';
  cursor: Scalars['String']['output'];
  node?: Maybe<Chore>;
};

export enum ChoreOrder {
  AclAsc = 'ACL_ASC',
  AclDesc = 'ACL_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  EventsAsc = 'events_ASC',
  EventsDesc = 'events_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  IsCompletedAsc = 'isCompleted_ASC',
  IsCompletedDesc = 'isCompleted_DESC',
  IsPriorityAsc = 'isPriority_ASC',
  IsPriorityDesc = 'isPriority_DESC',
  LastCompletedAtAsc = 'lastCompletedAt_ASC',
  LastCompletedAtDesc = 'lastCompletedAt_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  ObjectIdAsc = 'objectId_ASC',
  ObjectIdDesc = 'objectId_DESC',
  RecurringDaysAsc = 'recurringDays_ASC',
  RecurringDaysDesc = 'recurringDays_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  UserAsc = 'user_ASC',
  UserDesc = 'user_DESC'
}

export type ChorePointerInput = {
  createAndLink?: InputMaybe<CreateChoreFieldsInput>;
  link?: InputMaybe<Scalars['ID']['input']>;
};

export type ChoreRelationInput = {
  add?: InputMaybe<Array<Scalars['ID']['input']>>;
  createAndAdd?: InputMaybe<Array<CreateChoreFieldsInput>>;
  remove?: InputMaybe<Array<Scalars['ID']['input']>>;
};

export type ChoreRelationWhereInput = {
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  have?: InputMaybe<ChoreWhereInput>;
  haveNot?: InputMaybe<ChoreWhereInput>;
};

export type ChoreWhereInput = {
  ACL?: InputMaybe<ObjectWhereInput>;
  AND?: InputMaybe<Array<ChoreWhereInput>>;
  NOR?: InputMaybe<Array<ChoreWhereInput>>;
  OR?: InputMaybe<Array<ChoreWhereInput>>;
  createdAt?: InputMaybe<DateWhereInput>;
  events?: InputMaybe<EventRelationWhereInput>;
  id?: InputMaybe<IdWhereInput>;
  isCompleted?: InputMaybe<BooleanWhereInput>;
  isPriority?: InputMaybe<BooleanWhereInput>;
  lastCompletedAt?: InputMaybe<DateWhereInput>;
  name?: InputMaybe<StringWhereInput>;
  objectId?: InputMaybe<IdWhereInput>;
  recurringDays?: InputMaybe<NumberWhereInput>;
  updatedAt?: InputMaybe<DateWhereInput>;
  user?: InputMaybe<UserRelationWhereInput>;
};

export type Class = {
  __typename?: 'Class';
  name: Scalars['String']['output'];
  schemaFields: Array<SchemaField>;
};

export type CreateChoreFieldsInput = {
  ACL?: InputMaybe<AclInput>;
  events?: InputMaybe<EventRelationInput>;
  isCompleted: Scalars['Boolean']['input'];
  isPriority: Scalars['Boolean']['input'];
  lastCompletedAt?: InputMaybe<Scalars['Date']['input']>;
  name: Scalars['String']['input'];
  recurringDays: Scalars['Float']['input'];
  user: UserPointerInput;
};

export type CreateChoreInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  fields?: InputMaybe<CreateChoreFieldsInput>;
};

export type CreateChorePayload = {
  __typename?: 'CreateChorePayload';
  chore: Chore;
  clientMutationId?: Maybe<Scalars['String']['output']>;
};

export type CreateClassInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  schemaFields?: InputMaybe<SchemaFieldsInput>;
};

export type CreateClassPayload = {
  __typename?: 'CreateClassPayload';
  class: Class;
  clientMutationId?: Maybe<Scalars['String']['output']>;
};

export type CreateEventFieldsInput = {
  ACL?: InputMaybe<AclInput>;
  chore: ChorePointerInput;
  name: Scalars['String']['input'];
  records?: InputMaybe<RecordRelationInput>;
  user: UserPointerInput;
};

export type CreateEventInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  fields?: InputMaybe<CreateEventFieldsInput>;
};

export type CreateEventPayload = {
  __typename?: 'CreateEventPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  event: Event;
};

export type CreateFileInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  upload: Scalars['Upload']['input'];
};

export type CreateFilePayload = {
  __typename?: 'CreateFilePayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  fileInfo: FileInfo;
};

export type CreateRecordFieldsInput = {
  ACL?: InputMaybe<AclInput>;
  event: EventPointerInput;
  time: Scalars['Float']['input'];
  user: UserPointerInput;
};

export type CreateRecordInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  fields?: InputMaybe<CreateRecordFieldsInput>;
};

export type CreateRecordPayload = {
  __typename?: 'CreateRecordPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  record: Record;
};

export type CreateRoleFieldsInput = {
  ACL?: InputMaybe<AclInput>;
  name?: InputMaybe<Scalars['String']['input']>;
  roles?: InputMaybe<RoleRelationInput>;
  users?: InputMaybe<UserRelationInput>;
};

export type CreateRoleInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  fields?: InputMaybe<CreateRoleFieldsInput>;
};

export type CreateRolePayload = {
  __typename?: 'CreateRolePayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  role: Role;
};

export type CreateSessionFieldsInput = {
  ACL?: InputMaybe<AclInput>;
  createdWith?: InputMaybe<Scalars['Object']['input']>;
  expiresAt?: InputMaybe<Scalars['Date']['input']>;
  installationId?: InputMaybe<Scalars['String']['input']>;
  restricted?: InputMaybe<Scalars['Boolean']['input']>;
  sessionToken?: InputMaybe<Scalars['String']['input']>;
  user?: InputMaybe<UserPointerInput>;
};

export type CreateSessionInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  fields?: InputMaybe<CreateSessionFieldsInput>;
};

export type CreateSessionPayload = {
  __typename?: 'CreateSessionPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  session: Session;
};

export type CreateUserFieldsInput = {
  ACL?: InputMaybe<AclInput>;
  authData?: InputMaybe<Scalars['Object']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  emailVerified?: InputMaybe<Scalars['Boolean']['input']>;
  password: Scalars['String']['input'];
  username: Scalars['String']['input'];
};

export type CreateUserInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  fields?: InputMaybe<CreateUserFieldsInput>;
};

export type CreateUserPayload = {
  __typename?: 'CreateUserPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  user: User;
};

export type DateWhereInput = {
  equalTo?: InputMaybe<Scalars['Date']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greaterThan?: InputMaybe<Scalars['Date']['input']>;
  greaterThanOrEqualTo?: InputMaybe<Scalars['Date']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Date']['input']>>>;
  inQueryKey?: InputMaybe<SelectInput>;
  lessThan?: InputMaybe<Scalars['Date']['input']>;
  lessThanOrEqualTo?: InputMaybe<Scalars['Date']['input']>;
  notEqualTo?: InputMaybe<Scalars['Date']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Date']['input']>>>;
  notInQueryKey?: InputMaybe<SelectInput>;
};

export type DeleteChoreInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
};

export type DeleteChorePayload = {
  __typename?: 'DeleteChorePayload';
  chore: Chore;
  clientMutationId?: Maybe<Scalars['String']['output']>;
};

export type DeleteClassInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
};

export type DeleteClassPayload = {
  __typename?: 'DeleteClassPayload';
  class: Class;
  clientMutationId?: Maybe<Scalars['String']['output']>;
};

export type DeleteEventInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
};

export type DeleteEventPayload = {
  __typename?: 'DeleteEventPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  event: Event;
};

export type DeleteRecordInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
};

export type DeleteRecordPayload = {
  __typename?: 'DeleteRecordPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  record: Record;
};

export type DeleteRoleInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
};

export type DeleteRolePayload = {
  __typename?: 'DeleteRolePayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  role: Role;
};

export type DeleteSessionInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
};

export type DeleteSessionPayload = {
  __typename?: 'DeleteSessionPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  session: Session;
};

export type DeleteUserInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
};

export type DeleteUserPayload = {
  __typename?: 'DeleteUserPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  user: User;
};

export type Element = {
  __typename?: 'Element';
  value: Scalars['Any']['output'];
};

export type Event = Node & ParseObject & {
  __typename?: 'Event';
  ACL: Acl;
  chore: Chore;
  createdAt: Scalars['Date']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  objectId: Scalars['ID']['output'];
  records: RecordConnection;
  updatedAt: Scalars['Date']['output'];
  user: User;
};


export type EventRecordsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  options?: InputMaybe<ReadOptionsInput>;
  order?: InputMaybe<Array<RecordOrder>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<RecordWhereInput>;
};

export type EventConnection = {
  __typename?: 'EventConnection';
  count: Scalars['Int']['output'];
  edges?: Maybe<Array<Maybe<EventEdge>>>;
  pageInfo: PageInfo;
};

export type EventEdge = {
  __typename?: 'EventEdge';
  cursor: Scalars['String']['output'];
  node?: Maybe<Event>;
};

export enum EventOrder {
  AclAsc = 'ACL_ASC',
  AclDesc = 'ACL_DESC',
  ChoreAsc = 'chore_ASC',
  ChoreDesc = 'chore_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  ObjectIdAsc = 'objectId_ASC',
  ObjectIdDesc = 'objectId_DESC',
  RecordsAsc = 'records_ASC',
  RecordsDesc = 'records_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  UserAsc = 'user_ASC',
  UserDesc = 'user_DESC'
}

export type EventPointerInput = {
  createAndLink?: InputMaybe<CreateEventFieldsInput>;
  link?: InputMaybe<Scalars['ID']['input']>;
};

export type EventRelationInput = {
  add?: InputMaybe<Array<Scalars['ID']['input']>>;
  createAndAdd?: InputMaybe<Array<CreateEventFieldsInput>>;
  remove?: InputMaybe<Array<Scalars['ID']['input']>>;
};

export type EventRelationWhereInput = {
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  have?: InputMaybe<EventWhereInput>;
  haveNot?: InputMaybe<EventWhereInput>;
};

export type EventWhereInput = {
  ACL?: InputMaybe<ObjectWhereInput>;
  AND?: InputMaybe<Array<EventWhereInput>>;
  NOR?: InputMaybe<Array<EventWhereInput>>;
  OR?: InputMaybe<Array<EventWhereInput>>;
  chore?: InputMaybe<ChoreRelationWhereInput>;
  createdAt?: InputMaybe<DateWhereInput>;
  id?: InputMaybe<IdWhereInput>;
  name?: InputMaybe<StringWhereInput>;
  objectId?: InputMaybe<IdWhereInput>;
  records?: InputMaybe<RecordRelationWhereInput>;
  updatedAt?: InputMaybe<DateWhereInput>;
  user?: InputMaybe<UserRelationWhereInput>;
};

export type FileInfo = {
  __typename?: 'FileInfo';
  name: Scalars['String']['output'];
  url: Scalars['String']['output'];
};

export type FileInput = {
  file?: InputMaybe<Scalars['File']['input']>;
  unlink?: InputMaybe<Scalars['Boolean']['input']>;
  upload?: InputMaybe<Scalars['Upload']['input']>;
};

export type FileWhereInput = {
  equalTo?: InputMaybe<Scalars['File']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greaterThan?: InputMaybe<Scalars['File']['input']>;
  greaterThanOrEqualTo?: InputMaybe<Scalars['File']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['File']['input']>>>;
  inQueryKey?: InputMaybe<SelectInput>;
  lessThan?: InputMaybe<Scalars['File']['input']>;
  lessThanOrEqualTo?: InputMaybe<Scalars['File']['input']>;
  matchesRegex?: InputMaybe<Scalars['String']['input']>;
  notEqualTo?: InputMaybe<Scalars['File']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['File']['input']>>>;
  notInQueryKey?: InputMaybe<SelectInput>;
  options?: InputMaybe<Scalars['String']['input']>;
};

export type GeoIntersectsInput = {
  point?: InputMaybe<GeoPointInput>;
};

export type GeoPoint = {
  __typename?: 'GeoPoint';
  latitude: Scalars['Float']['output'];
  longitude: Scalars['Float']['output'];
};

export type GeoPointInput = {
  latitude: Scalars['Float']['input'];
  longitude: Scalars['Float']['input'];
};

export type GeoPointWhereInput = {
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  geoWithin?: InputMaybe<GeoWithinInput>;
  maxDistance?: InputMaybe<Scalars['Float']['input']>;
  maxDistanceInKilometers?: InputMaybe<Scalars['Float']['input']>;
  maxDistanceInMiles?: InputMaybe<Scalars['Float']['input']>;
  maxDistanceInRadians?: InputMaybe<Scalars['Float']['input']>;
  nearSphere?: InputMaybe<GeoPointInput>;
  within?: InputMaybe<WithinInput>;
};

export type GeoWithinInput = {
  centerSphere?: InputMaybe<CenterSphereInput>;
  polygon?: InputMaybe<Array<GeoPointInput>>;
};

export type IdWhereInput = {
  equalTo?: InputMaybe<Scalars['ID']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greaterThan?: InputMaybe<Scalars['ID']['input']>;
  greaterThanOrEqualTo?: InputMaybe<Scalars['ID']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  inQueryKey?: InputMaybe<SelectInput>;
  lessThan?: InputMaybe<Scalars['ID']['input']>;
  lessThanOrEqualTo?: InputMaybe<Scalars['ID']['input']>;
  notEqualTo?: InputMaybe<Scalars['ID']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  notInQueryKey?: InputMaybe<SelectInput>;
};

export type KeyValueInput = {
  key: Scalars['String']['input'];
  value: Scalars['Any']['input'];
};

export type LogInInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  password: Scalars['String']['input'];
  username: Scalars['String']['input'];
};

export type LogInPayload = {
  __typename?: 'LogInPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  viewer: Viewer;
};

export type LogInWithInput = {
  authData: Scalars['Object']['input'];
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  fields?: InputMaybe<UserLoginWithInput>;
};

export type LogInWithPayload = {
  __typename?: 'LogInWithPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  viewer: Viewer;
};

export type LogOutInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
};

export type LogOutPayload = {
  __typename?: 'LogOutPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  ok: Scalars['Boolean']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createChore?: Maybe<CreateChorePayload>;
  createClass?: Maybe<CreateClassPayload>;
  createEvent?: Maybe<CreateEventPayload>;
  createFile?: Maybe<CreateFilePayload>;
  createRecord?: Maybe<CreateRecordPayload>;
  createRole?: Maybe<CreateRolePayload>;
  createSession?: Maybe<CreateSessionPayload>;
  createUser?: Maybe<CreateUserPayload>;
  deleteChore?: Maybe<DeleteChorePayload>;
  deleteClass?: Maybe<DeleteClassPayload>;
  deleteEvent?: Maybe<DeleteEventPayload>;
  deleteRecord?: Maybe<DeleteRecordPayload>;
  deleteRole?: Maybe<DeleteRolePayload>;
  deleteSession?: Maybe<DeleteSessionPayload>;
  deleteUser?: Maybe<DeleteUserPayload>;
  logIn?: Maybe<LogInPayload>;
  logInWith?: Maybe<LogInWithPayload>;
  logOut?: Maybe<LogOutPayload>;
  resetPassword?: Maybe<ResetPasswordPayload>;
  sendVerificationEmail?: Maybe<SendVerificationEmailPayload>;
  signUp?: Maybe<SignUpPayload>;
  updateChore?: Maybe<UpdateChorePayload>;
  updateClass?: Maybe<UpdateClassPayload>;
  updateEvent?: Maybe<UpdateEventPayload>;
  updateRecord?: Maybe<UpdateRecordPayload>;
  updateRole?: Maybe<UpdateRolePayload>;
  updateSession?: Maybe<UpdateSessionPayload>;
  updateUser?: Maybe<UpdateUserPayload>;
};


export type MutationCreateChoreArgs = {
  input: CreateChoreInput;
};


export type MutationCreateClassArgs = {
  input: CreateClassInput;
};


export type MutationCreateEventArgs = {
  input: CreateEventInput;
};


export type MutationCreateFileArgs = {
  input: CreateFileInput;
};


export type MutationCreateRecordArgs = {
  input: CreateRecordInput;
};


export type MutationCreateRoleArgs = {
  input: CreateRoleInput;
};


export type MutationCreateSessionArgs = {
  input: CreateSessionInput;
};


export type MutationCreateUserArgs = {
  input: CreateUserInput;
};


export type MutationDeleteChoreArgs = {
  input: DeleteChoreInput;
};


export type MutationDeleteClassArgs = {
  input: DeleteClassInput;
};


export type MutationDeleteEventArgs = {
  input: DeleteEventInput;
};


export type MutationDeleteRecordArgs = {
  input: DeleteRecordInput;
};


export type MutationDeleteRoleArgs = {
  input: DeleteRoleInput;
};


export type MutationDeleteSessionArgs = {
  input: DeleteSessionInput;
};


export type MutationDeleteUserArgs = {
  input: DeleteUserInput;
};


export type MutationLogInArgs = {
  input: LogInInput;
};


export type MutationLogInWithArgs = {
  input: LogInWithInput;
};


export type MutationLogOutArgs = {
  input: LogOutInput;
};


export type MutationResetPasswordArgs = {
  input: ResetPasswordInput;
};


export type MutationSendVerificationEmailArgs = {
  input: SendVerificationEmailInput;
};


export type MutationSignUpArgs = {
  input: SignUpInput;
};


export type MutationUpdateChoreArgs = {
  input: UpdateChoreInput;
};


export type MutationUpdateClassArgs = {
  input: UpdateClassInput;
};


export type MutationUpdateEventArgs = {
  input: UpdateEventInput;
};


export type MutationUpdateRecordArgs = {
  input: UpdateRecordInput;
};


export type MutationUpdateRoleArgs = {
  input: UpdateRoleInput;
};


export type MutationUpdateSessionArgs = {
  input: UpdateSessionInput;
};


export type MutationUpdateUserArgs = {
  input: UpdateUserInput;
};

export type Node = {
  id: Scalars['ID']['output'];
};

export type NumberWhereInput = {
  equalTo?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greaterThan?: InputMaybe<Scalars['Float']['input']>;
  greaterThanOrEqualTo?: InputMaybe<Scalars['Float']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  inQueryKey?: InputMaybe<SelectInput>;
  lessThan?: InputMaybe<Scalars['Float']['input']>;
  lessThanOrEqualTo?: InputMaybe<Scalars['Float']['input']>;
  notEqualTo?: InputMaybe<Scalars['Float']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  notInQueryKey?: InputMaybe<SelectInput>;
};

export type ObjectWhereInput = {
  equalTo?: InputMaybe<KeyValueInput>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greaterThan?: InputMaybe<KeyValueInput>;
  greaterThanOrEqualTo?: InputMaybe<KeyValueInput>;
  in?: InputMaybe<Array<InputMaybe<KeyValueInput>>>;
  inQueryKey?: InputMaybe<SelectInput>;
  lessThan?: InputMaybe<KeyValueInput>;
  lessThanOrEqualTo?: InputMaybe<KeyValueInput>;
  notEqualTo?: InputMaybe<KeyValueInput>;
  notIn?: InputMaybe<Array<InputMaybe<KeyValueInput>>>;
  notInQueryKey?: InputMaybe<SelectInput>;
};

export type PageInfo = {
  __typename?: 'PageInfo';
  endCursor?: Maybe<Scalars['String']['output']>;
  hasNextPage: Scalars['Boolean']['output'];
  hasPreviousPage: Scalars['Boolean']['output'];
  startCursor?: Maybe<Scalars['String']['output']>;
};

export type ParseObject = {
  ACL: Acl;
  createdAt: Scalars['Date']['output'];
  objectId: Scalars['ID']['output'];
  updatedAt: Scalars['Date']['output'];
};

export type PointerFieldInput = {
  name: Scalars['String']['input'];
  targetClassName: Scalars['String']['input'];
};

export type PolygonWhereInput = {
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  geoIntersects?: InputMaybe<GeoIntersectsInput>;
};

export type PublicAcl = {
  __typename?: 'PublicACL';
  read?: Maybe<Scalars['Boolean']['output']>;
  write?: Maybe<Scalars['Boolean']['output']>;
};

export type PublicAclInput = {
  read: Scalars['Boolean']['input'];
  write: Scalars['Boolean']['input'];
};

export type Query = {
  __typename?: 'Query';
  chore: Chore;
  chores: ChoreConnection;
  class: Class;
  classes: Array<Class>;
  event: Event;
  events: EventConnection;
  health: Scalars['Boolean']['output'];
  node?: Maybe<Node>;
  record: Record;
  records: RecordConnection;
  role: Role;
  roles: RoleConnection;
  session: Session;
  sessions: SessionConnection;
  user: User;
  users: UserConnection;
  viewer: Viewer;
};


export type QueryChoreArgs = {
  id: Scalars['ID']['input'];
  options?: InputMaybe<ReadOptionsInput>;
};


export type QueryChoresArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  options?: InputMaybe<ReadOptionsInput>;
  order?: InputMaybe<Array<ChoreOrder>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ChoreWhereInput>;
};


export type QueryClassArgs = {
  name: Scalars['String']['input'];
};


export type QueryEventArgs = {
  id: Scalars['ID']['input'];
  options?: InputMaybe<ReadOptionsInput>;
};


export type QueryEventsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  options?: InputMaybe<ReadOptionsInput>;
  order?: InputMaybe<Array<EventOrder>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<EventWhereInput>;
};


export type QueryNodeArgs = {
  id: Scalars['ID']['input'];
};


export type QueryRecordArgs = {
  id: Scalars['ID']['input'];
  options?: InputMaybe<ReadOptionsInput>;
};


export type QueryRecordsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  options?: InputMaybe<ReadOptionsInput>;
  order?: InputMaybe<Array<RecordOrder>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<RecordWhereInput>;
};


export type QueryRoleArgs = {
  id: Scalars['ID']['input'];
  options?: InputMaybe<ReadOptionsInput>;
};


export type QueryRolesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  options?: InputMaybe<ReadOptionsInput>;
  order?: InputMaybe<Array<RoleOrder>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<RoleWhereInput>;
};


export type QuerySessionArgs = {
  id: Scalars['ID']['input'];
  options?: InputMaybe<ReadOptionsInput>;
};


export type QuerySessionsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  options?: InputMaybe<ReadOptionsInput>;
  order?: InputMaybe<Array<SessionOrder>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<SessionWhereInput>;
};


export type QueryUserArgs = {
  id: Scalars['ID']['input'];
  options?: InputMaybe<ReadOptionsInput>;
};


export type QueryUsersArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  options?: InputMaybe<ReadOptionsInput>;
  order?: InputMaybe<Array<UserOrder>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<UserWhereInput>;
};

export type ReadOptionsInput = {
  includeReadPreference?: InputMaybe<ReadPreference>;
  readPreference?: InputMaybe<ReadPreference>;
  subqueryReadPreference?: InputMaybe<ReadPreference>;
};

export enum ReadPreference {
  Nearest = 'NEAREST',
  Primary = 'PRIMARY',
  PrimaryPreferred = 'PRIMARY_PREFERRED',
  Secondary = 'SECONDARY',
  SecondaryPreferred = 'SECONDARY_PREFERRED'
}

export type Record = Node & ParseObject & {
  __typename?: 'Record';
  ACL: Acl;
  createdAt: Scalars['Date']['output'];
  event: Event;
  id: Scalars['ID']['output'];
  objectId: Scalars['ID']['output'];
  time: Scalars['Float']['output'];
  updatedAt: Scalars['Date']['output'];
  user: User;
};

export type RecordConnection = {
  __typename?: 'RecordConnection';
  count: Scalars['Int']['output'];
  edges?: Maybe<Array<Maybe<RecordEdge>>>;
  pageInfo: PageInfo;
};

export type RecordEdge = {
  __typename?: 'RecordEdge';
  cursor: Scalars['String']['output'];
  node?: Maybe<Record>;
};

export enum RecordOrder {
  AclAsc = 'ACL_ASC',
  AclDesc = 'ACL_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  EventAsc = 'event_ASC',
  EventDesc = 'event_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  ObjectIdAsc = 'objectId_ASC',
  ObjectIdDesc = 'objectId_DESC',
  TimeAsc = 'time_ASC',
  TimeDesc = 'time_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  UserAsc = 'user_ASC',
  UserDesc = 'user_DESC'
}

export type RecordPointerInput = {
  createAndLink?: InputMaybe<CreateRecordFieldsInput>;
  link?: InputMaybe<Scalars['ID']['input']>;
};

export type RecordRelationInput = {
  add?: InputMaybe<Array<Scalars['ID']['input']>>;
  createAndAdd?: InputMaybe<Array<CreateRecordFieldsInput>>;
  remove?: InputMaybe<Array<Scalars['ID']['input']>>;
};

export type RecordRelationWhereInput = {
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  have?: InputMaybe<RecordWhereInput>;
  haveNot?: InputMaybe<RecordWhereInput>;
};

export type RecordWhereInput = {
  ACL?: InputMaybe<ObjectWhereInput>;
  AND?: InputMaybe<Array<RecordWhereInput>>;
  NOR?: InputMaybe<Array<RecordWhereInput>>;
  OR?: InputMaybe<Array<RecordWhereInput>>;
  createdAt?: InputMaybe<DateWhereInput>;
  event?: InputMaybe<EventRelationWhereInput>;
  id?: InputMaybe<IdWhereInput>;
  objectId?: InputMaybe<IdWhereInput>;
  time?: InputMaybe<NumberWhereInput>;
  updatedAt?: InputMaybe<DateWhereInput>;
  user?: InputMaybe<UserRelationWhereInput>;
};

export type RelationFieldInput = {
  name: Scalars['String']['input'];
  targetClassName: Scalars['String']['input'];
};

export type ResetPasswordInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  email: Scalars['String']['input'];
};

export type ResetPasswordPayload = {
  __typename?: 'ResetPasswordPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  ok: Scalars['Boolean']['output'];
};

export type Role = Node & ParseObject & {
  __typename?: 'Role';
  ACL: Acl;
  createdAt: Scalars['Date']['output'];
  id: Scalars['ID']['output'];
  name?: Maybe<Scalars['String']['output']>;
  objectId: Scalars['ID']['output'];
  roles: RoleConnection;
  updatedAt: Scalars['Date']['output'];
  users: UserConnection;
};


export type RoleRolesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  options?: InputMaybe<ReadOptionsInput>;
  order?: InputMaybe<Array<RoleOrder>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<RoleWhereInput>;
};


export type RoleUsersArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  options?: InputMaybe<ReadOptionsInput>;
  order?: InputMaybe<Array<UserOrder>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<UserWhereInput>;
};

export type RoleAcl = {
  __typename?: 'RoleACL';
  read: Scalars['Boolean']['output'];
  roleName: Scalars['ID']['output'];
  write: Scalars['Boolean']['output'];
};

export type RoleAclInput = {
  read: Scalars['Boolean']['input'];
  roleName: Scalars['String']['input'];
  write: Scalars['Boolean']['input'];
};

export type RoleConnection = {
  __typename?: 'RoleConnection';
  count: Scalars['Int']['output'];
  edges?: Maybe<Array<Maybe<RoleEdge>>>;
  pageInfo: PageInfo;
};

export type RoleEdge = {
  __typename?: 'RoleEdge';
  cursor: Scalars['String']['output'];
  node?: Maybe<Role>;
};

export enum RoleOrder {
  AclAsc = 'ACL_ASC',
  AclDesc = 'ACL_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  ObjectIdAsc = 'objectId_ASC',
  ObjectIdDesc = 'objectId_DESC',
  RolesAsc = 'roles_ASC',
  RolesDesc = 'roles_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  UsersAsc = 'users_ASC',
  UsersDesc = 'users_DESC'
}

export type RolePointerInput = {
  createAndLink?: InputMaybe<CreateRoleFieldsInput>;
  link?: InputMaybe<Scalars['ID']['input']>;
};

export type RoleRelationInput = {
  add?: InputMaybe<Array<Scalars['ID']['input']>>;
  createAndAdd?: InputMaybe<Array<CreateRoleFieldsInput>>;
  remove?: InputMaybe<Array<Scalars['ID']['input']>>;
};

export type RoleRelationWhereInput = {
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  have?: InputMaybe<RoleWhereInput>;
  haveNot?: InputMaybe<RoleWhereInput>;
};

export type RoleWhereInput = {
  ACL?: InputMaybe<ObjectWhereInput>;
  AND?: InputMaybe<Array<RoleWhereInput>>;
  NOR?: InputMaybe<Array<RoleWhereInput>>;
  OR?: InputMaybe<Array<RoleWhereInput>>;
  createdAt?: InputMaybe<DateWhereInput>;
  id?: InputMaybe<IdWhereInput>;
  name?: InputMaybe<StringWhereInput>;
  objectId?: InputMaybe<IdWhereInput>;
  roles?: InputMaybe<RoleRelationWhereInput>;
  updatedAt?: InputMaybe<DateWhereInput>;
  users?: InputMaybe<UserRelationWhereInput>;
};

export type SchemaAclField = SchemaField & {
  __typename?: 'SchemaACLField';
  name: Scalars['String']['output'];
};

export type SchemaArrayField = SchemaField & {
  __typename?: 'SchemaArrayField';
  name: Scalars['String']['output'];
};

export type SchemaArrayFieldInput = {
  name: Scalars['String']['input'];
};

export type SchemaBooleanField = SchemaField & {
  __typename?: 'SchemaBooleanField';
  name: Scalars['String']['output'];
};

export type SchemaBooleanFieldInput = {
  name: Scalars['String']['input'];
};

export type SchemaBytesField = SchemaField & {
  __typename?: 'SchemaBytesField';
  name: Scalars['String']['output'];
};

export type SchemaBytesFieldInput = {
  name: Scalars['String']['input'];
};

export type SchemaDateField = SchemaField & {
  __typename?: 'SchemaDateField';
  name: Scalars['String']['output'];
};

export type SchemaDateFieldInput = {
  name: Scalars['String']['input'];
};

export type SchemaField = {
  name: Scalars['String']['output'];
};

export type SchemaFieldInput = {
  name: Scalars['String']['input'];
};

export type SchemaFieldsInput = {
  addArrays?: InputMaybe<Array<SchemaArrayFieldInput>>;
  addBooleans?: InputMaybe<Array<SchemaBooleanFieldInput>>;
  addBytes?: InputMaybe<Array<SchemaBytesFieldInput>>;
  addDates?: InputMaybe<Array<SchemaDateFieldInput>>;
  addFiles?: InputMaybe<Array<SchemaFileFieldInput>>;
  addGeoPoint?: InputMaybe<SchemaGeoPointFieldInput>;
  addNumbers?: InputMaybe<Array<SchemaNumberFieldInput>>;
  addObjects?: InputMaybe<Array<SchemaObjectFieldInput>>;
  addPointers?: InputMaybe<Array<PointerFieldInput>>;
  addPolygons?: InputMaybe<Array<SchemaPolygonFieldInput>>;
  addRelations?: InputMaybe<Array<RelationFieldInput>>;
  addStrings?: InputMaybe<Array<SchemaStringFieldInput>>;
  remove?: InputMaybe<Array<SchemaFieldInput>>;
};

export type SchemaFileField = SchemaField & {
  __typename?: 'SchemaFileField';
  name: Scalars['String']['output'];
};

export type SchemaFileFieldInput = {
  name: Scalars['String']['input'];
};

export type SchemaGeoPointField = SchemaField & {
  __typename?: 'SchemaGeoPointField';
  name: Scalars['String']['output'];
};

export type SchemaGeoPointFieldInput = {
  name: Scalars['String']['input'];
};

export type SchemaNumberField = SchemaField & {
  __typename?: 'SchemaNumberField';
  name: Scalars['String']['output'];
};

export type SchemaNumberFieldInput = {
  name: Scalars['String']['input'];
};

export type SchemaObjectField = SchemaField & {
  __typename?: 'SchemaObjectField';
  name: Scalars['String']['output'];
};

export type SchemaObjectFieldInput = {
  name: Scalars['String']['input'];
};

export type SchemaPointerField = SchemaField & {
  __typename?: 'SchemaPointerField';
  name: Scalars['String']['output'];
  targetClassName: Scalars['String']['output'];
};

export type SchemaPolygonField = SchemaField & {
  __typename?: 'SchemaPolygonField';
  name: Scalars['String']['output'];
};

export type SchemaPolygonFieldInput = {
  name: Scalars['String']['input'];
};

export type SchemaRelationField = SchemaField & {
  __typename?: 'SchemaRelationField';
  name: Scalars['String']['output'];
  targetClassName: Scalars['String']['output'];
};

export type SchemaStringField = SchemaField & {
  __typename?: 'SchemaStringField';
  name: Scalars['String']['output'];
};

export type SchemaStringFieldInput = {
  name: Scalars['String']['input'];
};

export type SearchInput = {
  caseSensitive?: InputMaybe<Scalars['Boolean']['input']>;
  diacriticSensitive?: InputMaybe<Scalars['Boolean']['input']>;
  language?: InputMaybe<Scalars['String']['input']>;
  term: Scalars['String']['input'];
};

export type SelectInput = {
  key: Scalars['String']['input'];
  query: SubqueryInput;
};

export type SendVerificationEmailInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  email: Scalars['String']['input'];
};

export type SendVerificationEmailPayload = {
  __typename?: 'SendVerificationEmailPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  ok: Scalars['Boolean']['output'];
};

export type Session = Node & ParseObject & {
  __typename?: 'Session';
  ACL: Acl;
  createdAt: Scalars['Date']['output'];
  createdWith?: Maybe<Scalars['Object']['output']>;
  expiresAt?: Maybe<Scalars['Date']['output']>;
  id: Scalars['ID']['output'];
  installationId?: Maybe<Scalars['String']['output']>;
  objectId: Scalars['ID']['output'];
  restricted?: Maybe<Scalars['Boolean']['output']>;
  sessionToken?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['Date']['output'];
  user?: Maybe<User>;
};

export type SessionConnection = {
  __typename?: 'SessionConnection';
  count: Scalars['Int']['output'];
  edges?: Maybe<Array<Maybe<SessionEdge>>>;
  pageInfo: PageInfo;
};

export type SessionEdge = {
  __typename?: 'SessionEdge';
  cursor: Scalars['String']['output'];
  node?: Maybe<Session>;
};

export enum SessionOrder {
  AclAsc = 'ACL_ASC',
  AclDesc = 'ACL_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  CreatedWithAsc = 'createdWith_ASC',
  CreatedWithDesc = 'createdWith_DESC',
  ExpiresAtAsc = 'expiresAt_ASC',
  ExpiresAtDesc = 'expiresAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  InstallationIdAsc = 'installationId_ASC',
  InstallationIdDesc = 'installationId_DESC',
  ObjectIdAsc = 'objectId_ASC',
  ObjectIdDesc = 'objectId_DESC',
  RestrictedAsc = 'restricted_ASC',
  RestrictedDesc = 'restricted_DESC',
  SessionTokenAsc = 'sessionToken_ASC',
  SessionTokenDesc = 'sessionToken_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  UserAsc = 'user_ASC',
  UserDesc = 'user_DESC'
}

export type SessionPointerInput = {
  createAndLink?: InputMaybe<CreateSessionFieldsInput>;
  link?: InputMaybe<Scalars['ID']['input']>;
};

export type SessionRelationInput = {
  add?: InputMaybe<Array<Scalars['ID']['input']>>;
  createAndAdd?: InputMaybe<Array<CreateSessionFieldsInput>>;
  remove?: InputMaybe<Array<Scalars['ID']['input']>>;
};

export type SessionRelationWhereInput = {
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  have?: InputMaybe<SessionWhereInput>;
  haveNot?: InputMaybe<SessionWhereInput>;
};

export type SessionWhereInput = {
  ACL?: InputMaybe<ObjectWhereInput>;
  AND?: InputMaybe<Array<SessionWhereInput>>;
  NOR?: InputMaybe<Array<SessionWhereInput>>;
  OR?: InputMaybe<Array<SessionWhereInput>>;
  createdAt?: InputMaybe<DateWhereInput>;
  createdWith?: InputMaybe<ObjectWhereInput>;
  expiresAt?: InputMaybe<DateWhereInput>;
  id?: InputMaybe<IdWhereInput>;
  installationId?: InputMaybe<StringWhereInput>;
  objectId?: InputMaybe<IdWhereInput>;
  restricted?: InputMaybe<BooleanWhereInput>;
  sessionToken?: InputMaybe<StringWhereInput>;
  updatedAt?: InputMaybe<DateWhereInput>;
  user?: InputMaybe<UserRelationWhereInput>;
};

export type SignUpInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  fields?: InputMaybe<CreateUserFieldsInput>;
};

export type SignUpPayload = {
  __typename?: 'SignUpPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  viewer: Viewer;
};

export type StringWhereInput = {
  equalTo?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greaterThan?: InputMaybe<Scalars['String']['input']>;
  greaterThanOrEqualTo?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  inQueryKey?: InputMaybe<SelectInput>;
  lessThan?: InputMaybe<Scalars['String']['input']>;
  lessThanOrEqualTo?: InputMaybe<Scalars['String']['input']>;
  matchesRegex?: InputMaybe<Scalars['String']['input']>;
  notEqualTo?: InputMaybe<Scalars['String']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  notInQueryKey?: InputMaybe<SelectInput>;
  options?: InputMaybe<Scalars['String']['input']>;
  text?: InputMaybe<TextInput>;
};

export type SubqueryInput = {
  className: Scalars['String']['input'];
  where: Scalars['Object']['input'];
};

export type TextInput = {
  search: SearchInput;
};

export type UpdateChoreFieldsInput = {
  ACL?: InputMaybe<AclInput>;
  events?: InputMaybe<EventRelationInput>;
  isCompleted?: InputMaybe<Scalars['Boolean']['input']>;
  isPriority?: InputMaybe<Scalars['Boolean']['input']>;
  lastCompletedAt?: InputMaybe<Scalars['Date']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  recurringDays?: InputMaybe<Scalars['Float']['input']>;
  user?: InputMaybe<UserPointerInput>;
};

export type UpdateChoreInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  fields?: InputMaybe<UpdateChoreFieldsInput>;
  id: Scalars['ID']['input'];
};

export type UpdateChorePayload = {
  __typename?: 'UpdateChorePayload';
  chore: Chore;
  clientMutationId?: Maybe<Scalars['String']['output']>;
};

export type UpdateClassInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  schemaFields?: InputMaybe<SchemaFieldsInput>;
};

export type UpdateClassPayload = {
  __typename?: 'UpdateClassPayload';
  class: Class;
  clientMutationId?: Maybe<Scalars['String']['output']>;
};

export type UpdateEventFieldsInput = {
  ACL?: InputMaybe<AclInput>;
  chore?: InputMaybe<ChorePointerInput>;
  name?: InputMaybe<Scalars['String']['input']>;
  records?: InputMaybe<RecordRelationInput>;
  user?: InputMaybe<UserPointerInput>;
};

export type UpdateEventInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  fields?: InputMaybe<UpdateEventFieldsInput>;
  id: Scalars['ID']['input'];
};

export type UpdateEventPayload = {
  __typename?: 'UpdateEventPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  event: Event;
};

export type UpdateRecordFieldsInput = {
  ACL?: InputMaybe<AclInput>;
  event?: InputMaybe<EventPointerInput>;
  time?: InputMaybe<Scalars['Float']['input']>;
  user?: InputMaybe<UserPointerInput>;
};

export type UpdateRecordInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  fields?: InputMaybe<UpdateRecordFieldsInput>;
  id: Scalars['ID']['input'];
};

export type UpdateRecordPayload = {
  __typename?: 'UpdateRecordPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  record: Record;
};

export type UpdateRoleFieldsInput = {
  ACL?: InputMaybe<AclInput>;
  name?: InputMaybe<Scalars['String']['input']>;
  roles?: InputMaybe<RoleRelationInput>;
  users?: InputMaybe<UserRelationInput>;
};

export type UpdateRoleInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  fields?: InputMaybe<UpdateRoleFieldsInput>;
  id: Scalars['ID']['input'];
};

export type UpdateRolePayload = {
  __typename?: 'UpdateRolePayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  role: Role;
};

export type UpdateSessionFieldsInput = {
  ACL?: InputMaybe<AclInput>;
  createdWith?: InputMaybe<Scalars['Object']['input']>;
  expiresAt?: InputMaybe<Scalars['Date']['input']>;
  installationId?: InputMaybe<Scalars['String']['input']>;
  restricted?: InputMaybe<Scalars['Boolean']['input']>;
  sessionToken?: InputMaybe<Scalars['String']['input']>;
  user?: InputMaybe<UserPointerInput>;
};

export type UpdateSessionInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  fields?: InputMaybe<UpdateSessionFieldsInput>;
  id: Scalars['ID']['input'];
};

export type UpdateSessionPayload = {
  __typename?: 'UpdateSessionPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  session: Session;
};

export type UpdateUserFieldsInput = {
  ACL?: InputMaybe<AclInput>;
  authData?: InputMaybe<Scalars['Object']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  emailVerified?: InputMaybe<Scalars['Boolean']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateUserInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  fields?: InputMaybe<UpdateUserFieldsInput>;
  id: Scalars['ID']['input'];
};

export type UpdateUserPayload = {
  __typename?: 'UpdateUserPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  user: User;
};

export type User = Node & ParseObject & {
  __typename?: 'User';
  ACL: Acl;
  authData?: Maybe<Scalars['Object']['output']>;
  createdAt: Scalars['Date']['output'];
  email?: Maybe<Scalars['String']['output']>;
  emailVerified?: Maybe<Scalars['Boolean']['output']>;
  id: Scalars['ID']['output'];
  objectId: Scalars['ID']['output'];
  updatedAt: Scalars['Date']['output'];
  username?: Maybe<Scalars['String']['output']>;
};

export type UserAcl = {
  __typename?: 'UserACL';
  read: Scalars['Boolean']['output'];
  userId: Scalars['ID']['output'];
  write: Scalars['Boolean']['output'];
};

export type UserAclInput = {
  read: Scalars['Boolean']['input'];
  userId: Scalars['ID']['input'];
  write: Scalars['Boolean']['input'];
};

export type UserConnection = {
  __typename?: 'UserConnection';
  count: Scalars['Int']['output'];
  edges?: Maybe<Array<Maybe<UserEdge>>>;
  pageInfo: PageInfo;
};

export type UserEdge = {
  __typename?: 'UserEdge';
  cursor: Scalars['String']['output'];
  node?: Maybe<User>;
};

export type UserLoginWithInput = {
  ACL?: InputMaybe<AclInput>;
  email?: InputMaybe<Scalars['String']['input']>;
  emailVerified?: InputMaybe<Scalars['Boolean']['input']>;
};

export enum UserOrder {
  AclAsc = 'ACL_ASC',
  AclDesc = 'ACL_DESC',
  AuthDataAsc = 'authData_ASC',
  AuthDataDesc = 'authData_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  EmailVerifiedAsc = 'emailVerified_ASC',
  EmailVerifiedDesc = 'emailVerified_DESC',
  EmailAsc = 'email_ASC',
  EmailDesc = 'email_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  ObjectIdAsc = 'objectId_ASC',
  ObjectIdDesc = 'objectId_DESC',
  PasswordAsc = 'password_ASC',
  PasswordDesc = 'password_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  UsernameAsc = 'username_ASC',
  UsernameDesc = 'username_DESC'
}

export type UserPointerInput = {
  createAndLink?: InputMaybe<CreateUserFieldsInput>;
  link?: InputMaybe<Scalars['ID']['input']>;
};

export type UserRelationInput = {
  add?: InputMaybe<Array<Scalars['ID']['input']>>;
  createAndAdd?: InputMaybe<Array<CreateUserFieldsInput>>;
  remove?: InputMaybe<Array<Scalars['ID']['input']>>;
};

export type UserRelationWhereInput = {
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  have?: InputMaybe<UserWhereInput>;
  haveNot?: InputMaybe<UserWhereInput>;
};

export type UserWhereInput = {
  ACL?: InputMaybe<ObjectWhereInput>;
  AND?: InputMaybe<Array<UserWhereInput>>;
  NOR?: InputMaybe<Array<UserWhereInput>>;
  OR?: InputMaybe<Array<UserWhereInput>>;
  authData?: InputMaybe<ObjectWhereInput>;
  createdAt?: InputMaybe<DateWhereInput>;
  email?: InputMaybe<StringWhereInput>;
  emailVerified?: InputMaybe<BooleanWhereInput>;
  id?: InputMaybe<IdWhereInput>;
  objectId?: InputMaybe<IdWhereInput>;
  password?: InputMaybe<StringWhereInput>;
  updatedAt?: InputMaybe<DateWhereInput>;
  username?: InputMaybe<StringWhereInput>;
};

export type Viewer = {
  __typename?: 'Viewer';
  sessionToken: Scalars['String']['output'];
  user: User;
};

export type WithinInput = {
  box: BoxInput;
};

export type LoginMutationMutationVariables = Exact<{
  input: LogInInput;
}>;


export type LoginMutationMutation = { __typename?: 'Mutation', logIn?: { __typename?: 'LogInPayload', viewer: { __typename?: 'Viewer', sessionToken: string, user: { __typename?: 'User', id: string, username?: string | null } } } | null };

export type SignUpMutationMutationVariables = Exact<{
  input: SignUpInput;
}>;


export type SignUpMutationMutation = { __typename?: 'Mutation', signUp?: { __typename?: 'SignUpPayload', viewer: { __typename?: 'Viewer', sessionToken: string, user: { __typename?: 'User', id: string, username?: string | null } } } | null };

export type LogoutMutationMutationVariables = Exact<{
  input: LogOutInput;
}>;


export type LogoutMutationMutation = { __typename?: 'Mutation', logOut?: { __typename?: 'LogOutPayload', ok: boolean } | null };

export type ChoresQueryQueryVariables = Exact<{
  userId: Scalars['ID']['input'];
  isCompleted: Scalars['Boolean']['input'];
}>;


export type ChoresQueryQuery = { __typename?: 'Query', chores: { __typename?: 'ChoreConnection', edges?: Array<{ __typename?: 'ChoreEdge', node?: { __typename?: 'Chore', id: string, name: string, recurringDays: number, isPriority: boolean, isCompleted: boolean, lastCompletedAt?: any | null } | null } | null> | null } };

export type ChoresSingleQueryQueryVariables = Exact<{
  choreId: Scalars['ID']['input'];
}>;


export type ChoresSingleQueryQuery = { __typename?: 'Query', chore: { __typename?: 'Chore', id: string, name: string, recurringDays: number, isPriority: boolean, isCompleted: boolean }, events: { __typename?: 'EventConnection', edges?: Array<{ __typename?: 'EventEdge', node?: { __typename?: 'Event', id: string, name: string, chore: { __typename?: 'Chore', name: string } } | null } | null> | null } };

export type ChoresCreateMutationMutationVariables = Exact<{
  input: CreateChoreInput;
}>;


export type ChoresCreateMutationMutation = { __typename?: 'Mutation', createChore?: { __typename?: 'CreateChorePayload', chore: { __typename?: 'Chore', id: string } } | null };

export type ChoresDeleteMutationMutationVariables = Exact<{
  choreId: Scalars['ID']['input'];
}>;


export type ChoresDeleteMutationMutation = { __typename?: 'Mutation', deleteChore?: { __typename?: 'DeleteChorePayload', clientMutationId?: string | null } | null };

export type ChoresCompletedMutationMutationVariables = Exact<{
  choreId: Scalars['ID']['input'];
  isCompleted: Scalars['Boolean']['input'];
  lastCompletedAt: Scalars['Date']['input'];
}>;


export type ChoresCompletedMutationMutation = { __typename?: 'Mutation', updateChore?: { __typename?: 'UpdateChorePayload', chore: { __typename?: 'Chore', id: string } } | null };

export type EventsCreateMutationMutationVariables = Exact<{
  input: CreateEventInput;
}>;


export type EventsCreateMutationMutation = { __typename?: 'Mutation', createEvent?: { __typename?: 'CreateEventPayload', event: { __typename?: 'Event', id: string } } | null };

export type EventsQueryQueryVariables = Exact<{
  userId: Scalars['ID']['input'];
}>;


export type EventsQueryQuery = { __typename?: 'Query', events: { __typename?: 'EventConnection', edges?: Array<{ __typename?: 'EventEdge', node?: { __typename?: 'Event', id: string, name: string, chore: { __typename?: 'Chore', name: string } } | null } | null> | null } };

export type EventQueryQueryVariables = Exact<{
  eventId: Scalars['ID']['input'];
}>;


export type EventQueryQuery = { __typename?: 'Query', event: { __typename?: 'Event', id: string, name: string, chore: { __typename?: 'Chore', id: string, name: string } }, records: { __typename?: 'RecordConnection', edges?: Array<{ __typename?: 'RecordEdge', cursor: string, node?: { __typename?: 'Record', id: string, time: number, createdAt: any } | null } | null> | null, pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: string | null, endCursor?: string | null } } };

export type EventsDeleteMutationMutationVariables = Exact<{
  eventId: Scalars['ID']['input'];
}>;


export type EventsDeleteMutationMutation = { __typename?: 'Mutation', deleteEvent?: { __typename?: 'DeleteEventPayload', clientMutationId?: string | null } | null };

export type RecordsCreateMutationMutationVariables = Exact<{
  choreId: Scalars['ID']['input'];
  eventId: Scalars['ID']['input'];
  userId: Scalars['ID']['input'];
  time: Scalars['Float']['input'];
  date: Scalars['Date']['input'];
}>;


export type RecordsCreateMutationMutation = { __typename?: 'Mutation', updateEvent?: { __typename?: 'UpdateEventPayload', clientMutationId?: string | null } | null, updateChore?: { __typename?: 'UpdateChorePayload', clientMutationId?: string | null } | null };

export type RecordsDeleteMutationMutationVariables = Exact<{
  recordId: Scalars['ID']['input'];
}>;


export type RecordsDeleteMutationMutation = { __typename?: 'Mutation', deleteRecord?: { __typename?: 'DeleteRecordPayload', clientMutationId?: string | null } | null };

export type GetUserQueryVariables = Exact<{ [key: string]: never; }>;


export type GetUserQuery = { __typename?: 'Query', viewer: { __typename?: 'Viewer', sessionToken: string, user: { __typename?: 'User', id: string, username?: string | null } } };


export const LoginMutationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"loginMutation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"LogInInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"logIn"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"viewer"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sessionToken"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}}]}}]}}]}}]}}]} as unknown as DocumentNode<LoginMutationMutation, LoginMutationMutationVariables>;
export const SignUpMutationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"signUpMutation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"SignUpInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"signUp"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"viewer"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sessionToken"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}}]}}]}}]}}]}}]} as unknown as DocumentNode<SignUpMutationMutation, SignUpMutationMutationVariables>;
export const LogoutMutationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"logoutMutation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"LogOutInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"logOut"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ok"}}]}}]}}]} as unknown as DocumentNode<LogoutMutationMutation, LogoutMutationMutationVariables>;
export const ChoresQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"choresQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"isCompleted"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"chores"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"user"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"have"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"equalTo"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}}]}}]}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"isCompleted"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"equalTo"},"value":{"kind":"Variable","name":{"kind":"Name","value":"isCompleted"}}}]}}]}},{"kind":"Argument","name":{"kind":"Name","value":"order"},"value":{"kind":"ListValue","values":[{"kind":"EnumValue","value":"lastCompletedAt_ASC"}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"recurringDays"}},{"kind":"Field","name":{"kind":"Name","value":"isPriority"}},{"kind":"Field","name":{"kind":"Name","value":"isCompleted"}},{"kind":"Field","name":{"kind":"Name","value":"lastCompletedAt"}}]}}]}}]}}]}}]} as unknown as DocumentNode<ChoresQueryQuery, ChoresQueryQueryVariables>;
export const ChoresSingleQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"choresSingleQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"choreId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"chore"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"choreId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"recurringDays"}},{"kind":"Field","name":{"kind":"Name","value":"isPriority"}},{"kind":"Field","name":{"kind":"Name","value":"isCompleted"}}]}},{"kind":"Field","name":{"kind":"Name","value":"events"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"chore"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"have"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"equalTo"},"value":{"kind":"Variable","name":{"kind":"Name","value":"choreId"}}}]}}]}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"chore"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<ChoresSingleQueryQuery, ChoresSingleQueryQueryVariables>;
export const ChoresCreateMutationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"choresCreateMutation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateChoreInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createChore"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"chore"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]} as unknown as DocumentNode<ChoresCreateMutationMutation, ChoresCreateMutationMutationVariables>;
export const ChoresDeleteMutationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"choresDeleteMutation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"choreId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteChore"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"choreId"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"clientMutationId"}}]}}]}}]} as unknown as DocumentNode<ChoresDeleteMutationMutation, ChoresDeleteMutationMutationVariables>;
export const ChoresCompletedMutationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"ChoresCompletedMutation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"choreId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"isCompleted"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"lastCompletedAt"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Date"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateChore"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"choreId"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"fields"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"isCompleted"},"value":{"kind":"Variable","name":{"kind":"Name","value":"isCompleted"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"lastCompletedAt"},"value":{"kind":"Variable","name":{"kind":"Name","value":"lastCompletedAt"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"chore"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]} as unknown as DocumentNode<ChoresCompletedMutationMutation, ChoresCompletedMutationMutationVariables>;
export const EventsCreateMutationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"eventsCreateMutation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateEventInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createEvent"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"event"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]} as unknown as DocumentNode<EventsCreateMutationMutation, EventsCreateMutationMutationVariables>;
export const EventsQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"eventsQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"events"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"user"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"have"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"equalTo"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}}]}}]}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"chore"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<EventsQueryQuery, EventsQueryQueryVariables>;
export const EventQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"eventQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"eventId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"event"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"eventId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"chore"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"records"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"event"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"have"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"equalTo"},"value":{"kind":"Variable","name":{"kind":"Name","value":"eventId"}}}]}}]}}]}}]}},{"kind":"Argument","name":{"kind":"Name","value":"order"},"value":{"kind":"EnumValue","value":"time_ASC"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cursor"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"time"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}},{"kind":"Field","name":{"kind":"Name","value":"hasPreviousPage"}},{"kind":"Field","name":{"kind":"Name","value":"startCursor"}},{"kind":"Field","name":{"kind":"Name","value":"endCursor"}}]}}]}}]}}]} as unknown as DocumentNode<EventQueryQuery, EventQueryQueryVariables>;
export const EventsDeleteMutationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"eventsDeleteMutation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"eventId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteEvent"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"eventId"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"clientMutationId"}}]}}]}}]} as unknown as DocumentNode<EventsDeleteMutationMutation, EventsDeleteMutationMutationVariables>;
export const RecordsCreateMutationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"recordsCreateMutation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"choreId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"eventId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"time"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Float"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"date"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Date"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateEvent"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"eventId"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"fields"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"records"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"createAndAdd"},"value":{"kind":"ListValue","values":[{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"time"},"value":{"kind":"Variable","name":{"kind":"Name","value":"time"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"user"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"link"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"event"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"link"},"value":{"kind":"Variable","name":{"kind":"Name","value":"eventId"}}}]}}]}]}}]}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"clientMutationId"}}]}},{"kind":"Field","name":{"kind":"Name","value":"updateChore"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"choreId"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"fields"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"lastCompletedAt"},"value":{"kind":"Variable","name":{"kind":"Name","value":"date"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"clientMutationId"}}]}}]}}]} as unknown as DocumentNode<RecordsCreateMutationMutation, RecordsCreateMutationMutationVariables>;
export const RecordsDeleteMutationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"recordsDeleteMutation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"recordId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteRecord"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"recordId"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"clientMutationId"}}]}}]}}]} as unknown as DocumentNode<RecordsDeleteMutationMutation, RecordsDeleteMutationMutationVariables>;
export const GetUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getUser"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"viewer"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sessionToken"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}}]}}]}}]}}]} as unknown as DocumentNode<GetUserQuery, GetUserQueryVariables>;