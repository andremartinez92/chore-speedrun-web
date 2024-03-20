import { loadDevMessages } from '@apollo/client/dev';
import '@testing-library/jest-dom/vitest';

if (process.env.NODE_ENV !== 'production') {
  loadDevMessages();
}
