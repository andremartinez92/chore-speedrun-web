/// <reference types="vitest" />
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  plugins: [tsconfigPaths(), react()],
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: ['src/tests/config/vitest-setup.ts'],
    coverage: {
      reporter: ['text'],
      provider: 'v8',
      exclude: [
        'node_modules/**',
        'dist/**',
        'public/**',
        'src/graphql/generated.ts',
      ],
      extension: ['.ts', '.tsx'],
      clean: true,
      include: ['src/**/*.{ts,tsx}'],
    },
  },
});
