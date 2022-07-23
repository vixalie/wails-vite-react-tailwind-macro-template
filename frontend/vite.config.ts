import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig, loadEnv } from 'vite';

// https://vitejs.dev/config/
export default mode => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };

  return defineConfig({
    resolve: {
      alias: {
        '@c': path.resolve(__dirname, 'src', 'components'),
        '@h': path.resolve(__dirname, 'src', 'hooks'),
        '@p': path.resolve(__dirname, 'src', 'pages'),
        '@': path.resolve(__dirname, 'src')
      }
    },
    build: {
      minify: false
    },
    plugins: [
      react({
        babel: {
          plugins: [
            'babel-plugin-macros',
            [
              '@emotion/babel-plugin-jsx-pragmatic',
              {
                export: 'jsx',
                import: '__cssprop',
                module: '@emotion/react'
              }
            ],
            ['@babel/plugin-transform-react-jsx', { pragma: '__cssprop' }, 'twin.macro']
          ]
        }
      })
    ],
    server: {
      port: 3000
    }
  });
};
