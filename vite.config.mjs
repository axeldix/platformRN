import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react-swc';

const extensions = [
  '.web.tsx',
  '.tsx',
  '.web.ts',
  '.ts',
  '.web.jsx',
  '.jsx',
  '.web.js',
  '.js',
  '.css',
  '.json',
  '.mjs',
];

const development = process.env.NODE_ENV === 'development';

export default defineConfig({
  plugins: [react()],
  define: {
    global: 'window',
    __DEV__: JSON.stringify(development),
    DEV: JSON.stringify(development),
    'process.<wbr>env': {},
    // 'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
  },
  resolve: {
    alias: {
      'react-native/Libraries/Renderer/shims/ReactFabric':'react-native/Libraries/Renderer/shims/ReactFabric',
      'react-native/Libraries/Renderer/shims/ReactNative':'react-native/Libraries/Renderer/shims/ReactNative',
      'react-native': 'react-native-web',
    },
    preserveSymlinks: process.env.NODE_ENV === 'production',
  },
  build: {
    commonjsOptions: {
      transformMixedEsModules: true,
    },
  },
  optimizeDeps: {
    include: ['react-native', 'react-native-web'],
    esbuildOptions: {
      loader: {
        '.js': 'jsx',
        '.jsx': 'jsx',
        '.ts': 'tsx',
        '.tsx': 'tsx',
      },
      resolveExtensions: extensions,
    },
  },
  esbuild: {
    jsxFactory: 'React.createElement',
    jsxFragment: 'React.Fragment',
  },
});
