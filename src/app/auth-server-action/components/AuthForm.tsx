'use client';

import { useGetProfilesQuery } from '@/graphql/generated';
import RegisterForm from './RegisterForm';
import SignIn from './SignIn';

const AuthForm = () => {
  const { data: newData } = useGetProfilesQuery();

  console.log(newData);

  return (
    <div>
      Register
      <RegisterForm />
      Sign in
      <SignIn />
    </div>
  );
};

export default AuthForm;
