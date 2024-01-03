'use client';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/features/ui/tabs';
import GoogleSignInButton from '../google-sign-in-button';
import LoginForm from '../login-form';
import RegisterForm from '../register-form';

enum AuthTabEnum {
  LOGIN = 'LOGIN',
  REGISTER = 'REGISTER',
}

const AuthTabs = () => {
  return (
    <Tabs defaultValue={AuthTabEnum.REGISTER}>
      <TabsList>
        <TabsTrigger value={AuthTabEnum.REGISTER}>Register</TabsTrigger>
        <TabsTrigger value={AuthTabEnum.LOGIN}>Login</TabsTrigger>
      </TabsList>

      <TabsContent value={AuthTabEnum.REGISTER}>
        <RegisterForm />
      </TabsContent>

      <TabsContent value={AuthTabEnum.LOGIN}>
        <LoginForm />
        <GoogleSignInButton />
      </TabsContent>
    </Tabs>
  );
};

export default AuthTabs;
