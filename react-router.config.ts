import type { Config } from '@react-router/dev/config';

export default {
  basename: '/client',
  ssr: false,
  buildDirectory: 'docs',
} satisfies Config;
