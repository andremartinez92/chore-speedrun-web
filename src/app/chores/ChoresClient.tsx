'use client';

import { SessionType } from '@/types/types';
import CreateForm from './CreateForm';
import SignOut from './SignOut';

interface ChoresClientProps {
  session: SessionType;
}

const ChoresClient = ({ session }: ChoresClientProps) => {
  console.log(session);
  return (
    <div>
      Hello authed
      <SignOut />
      <CreateForm />
    </div>
  );
};

export default ChoresClient;
