import type { RouteConfig } from '@react-router/dev/routes';
import { index, layout, route } from '@react-router/dev/routes';

export default [
  layout('routes/layout.tsx', [
    index('routes/default.tsx'),
    route(':id/*', 'routes/about.tsx'),
  ]),
] satisfies RouteConfig;
