import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [
    react({
      include: /\.(js|jsx)$/,
      babel: {
        plugins: [
          ['@babel/plugin-transform-react-jsx', { runtime: 'automatic' }]
        ]
      }
    })
  ],
  esbuild: {
    loader: 'jsx',
    include: /\.(js|jsx|ts|tsx)$/,
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
    alias: {
      crypto: 'crypto-browserify'
    }
  },
  base: "/phase-2-project.github.io/",
  build: {
    rollupOptions: {
      output: {
        assetFileNames: 'assets/[name].[ext]'
      }
    }
  }
});