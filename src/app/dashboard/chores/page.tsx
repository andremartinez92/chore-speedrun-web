'use server';

import SignOut from './SignOut';
import CreateForm from './components/CreateForm';

const Chores = () => {
  return (
    <div>
      Hello authed
      <SignOut />
      <CreateForm />
    </div>
  );
};

export default Chores;
