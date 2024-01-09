'use client';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/features/ui/tabs';
import { useSearchParams } from 'next/navigation';
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
        <LoginForm />
      </TabsContent>
    </Tabs>
  );
};

export default AuthTabs;
