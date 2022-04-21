/// <reference types="vite-plugin-pages/client-react" />

import { defineConfig } from 'vite';
import path from 'path';
import react from '@vitejs/plugin-react';
import eslintPlugin from 'vite-plugin-eslint';
import Pages from 'vite-plugin-pages';
import AutoImport from 'unplugin-auto-import/vite';
import Unocss from 'unocss/vite';

export default defineConfig({
  resolve: {
    alias: {
      '~/': `${path.resolve(__dirname, 'src')}/`,
    },
  },
  plugins: [
    react(),

    // https://github.com/gxmari007/vite-plugin-eslint
    eslintPlugin(),

    // https://github.com/hannoeru/vite-plugin-pages
    Pages({
      dirs: './src/pages',
    }),

    // https://github.com/antfu/unplugin-auto-import
    AutoImport({
      imports: ['react', 'react-router-dom'],
      dts: 'src/auto-imports.d.ts',
    }),

    // https://github.com/unocss/unocss
    Unocss(),
  ],
});
