import { gql, useQuery } from '@apollo/client';
import AuthForm from './AuthForm';

const allTodosQueryDocument = gql(/* GraphQL */ `
  query AllTodos($cursor: Cursor) {
    profilesCollection(first: 10, after: $cursor) {
      edges {
        node {
          username
        }
      }
      pageInfo {
        endCursor
        hasNextPage
      }
    }
  }
`);

export default function Home() {
  const { data } = useQuery(allTodosQueryDocument);

  console.log(data);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Supabase Auth + Storage</h1>
      <AuthForm />
    </main>
  );
}
