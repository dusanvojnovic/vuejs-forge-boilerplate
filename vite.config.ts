import { fileURLToPath, URL } from 'url';

import { defineConfig } from 'vite';
import graphql from '@rollup/plugin-graphql';

// plugins
import vue from '@vitejs/plugin-vue';
import Pages from 'vite-plugin-pages';
import Components from 'unplugin-vue-components/vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), graphql(), Pages(), Components()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
});
