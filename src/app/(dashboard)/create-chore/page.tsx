'use server';

import { Box } from '@mui/material';
import CreateChoreForm from './components/CreateChoreForm';

const Chores = () => {
  return (
    <Box>
      <CreateChoreForm />
    </Box>
  );
};

export default Chores;
