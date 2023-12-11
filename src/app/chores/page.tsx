'use server';

import { SessionType } from '@/types/types';
import ChoresClient from './ChoresClient';

type Props = {
  session: SessionType;
};

const Chores = ({ session }: Props) => {
  return <ChoresClient session={session} />;
};

export default Chores;
