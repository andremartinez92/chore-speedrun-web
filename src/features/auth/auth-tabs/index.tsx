'use client';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/features/ui/tabs';
import { useSearchParams } from 'next/navigation';
import GoogleSignInButton from '../google-sign-in-button';
import LoginForm from '../login-form';
import RegisterForm from '../register-form';

enum AuthTabEnum {
  LOGIN = 'LOGIN',
  REGISTER = 'REGISTER',
}

const AuthTabs = () => {
  const searchParams = useSearchParams();
  const searchTab = searchParams.get('tab')?.toUpperCase();

  const defaultTab =
    searchTab && searchTab in AuthTabEnum
      ? AuthTabEnum[searchTab as AuthTabEnum]
      : AuthTabEnum.REGISTER;

  return (
    <Tabs defaultValue={defaultTab}>
      <TabsList>
        <TabsTrigger value={AuthTabEnum.REGISTER}>Register</TabsTrigger>
        <TabsTrigger value={AuthTabEnum.LOGIN}>Login</TabsTrigger>
      </TabsList>

      <TabsContent value={AuthTabEnum.REGISTER}>
        <RegisterForm />
      </TabsContent>

      <TabsContent value={AuthTabEnum.LOGIN}>
        <div className="flex flex-col justify-center gap-4">
          <LoginForm />
          <GoogleSignInButton />
        </div>
      </TabsContent>
    </Tabs>
  );
};

export default AuthTabs;
