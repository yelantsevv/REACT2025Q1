import { defineConfig } from 'vitest/config';
import { reactRouter } from '@react-router/dev/vite';

export default defineConfig({
  plugins: [reactRouter()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./src/tests/setup.ts'],
    coverage: {
      include: ['src/**/*.tsx'],
      exclude: ['**/main.tsx', '**/types/**', '**/tests/**'],
    },
  },
});
