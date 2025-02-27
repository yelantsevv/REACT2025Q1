import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./src/tests/setup.ts'],
    coverage: {
      include: ['src/**/*.tsx', 'app/**/*.tsx'],
      exclude: ['**/main.tsx', '**/types/**', '**/tests/**'],
    },
  },
});
