import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react-swc';
import browserslistToEsbuild from 'browserslist-to-esbuild';
import { defineConfig } from 'vite';
import string from 'vite-plugin-string';
import viteTsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  // depending on your application, base can also be "/"
  base: '',
  plugins: [
    react(),
    viteTsconfigPaths(),
    tailwindcss(),
    string({
      include: '**/*.md', // Enable importing .md files as text
    }),
  ],
  server: {
    // this ensures that the browser opens upon server start
    open: true,
    // this sets a default port to 3000
    port: 3000,
    allowedHosts: true,
  },
  build: {
    // --> ["chrome79", "edge92", "firefox91", "safari13.1"]
    target: browserslistToEsbuild(['>0.2%', 'not dead', 'not op_mini all']),
  },
  css: {
    preprocessorOptions: {
      scss: {
        // Add SCSS options here if needed
      },
    },
  },
});
