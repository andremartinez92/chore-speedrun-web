'use server';

import SignOut from './SignOut';
import CreateForm from './components/CreateForm';

const Chores = () => {
  return (
    <div>
      <SignOut />
      <CreateForm />
    </div>
  );
};

export default Chores;
