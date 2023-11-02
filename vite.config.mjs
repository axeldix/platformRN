import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react-swc';
import reactRefresh from '@vitejs/plugin-react-refresh';
import resolve from '@rollup/plugin-node-resolve';

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
  plugins: [
    react(),
    reactRefresh(),
    resolve({
      extensions: ['.js', '.ts'],
    }),
  ],
  define: {
    global: 'window',
    __DEV__: JSON.stringify(development),
    DEV: JSON.stringify(development),
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
  },
  resolve: {
    alias: {
      'react-native/Libraries/Renderer/shims/ReactFabric':
        'react-native/Libraries/Renderer/shims/ReactFabric',
      'react-native/Libraries/Renderer/shims/ReactNative':
        'react-native/Libraries/Renderer/shims/ReactNative',
      'react-native/Libraries/Pressability/PressabilityDebug':
        'react-native/Libraries/Pressability/PressabilityDebug',
      'react-native/Libraries/Utilities/codegenNativeComponent':
        'react-native/Libraries/Utilities/codegenNativeComponent',
      'react-native/Libraries/ReactPrivate/ReactNativePrivateInterface':
        'react-native/Libraries/ReactPrivate/ReactNativePrivateInterface',
      'react-native': 'react-native-web',
      find: /^(.*)\.js$/,
      replacement: '$1',
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
