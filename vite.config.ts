import { defineConfig } from 'vite';
import path from 'path';
import dts from 'vite-plugin-dts';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    dts({
      include: ['src/index.ts', 'src/types.ts'],
      outputDir: 'lib/types'
    })
  ],

  build: {
    target: 'es2015',
    outDir: 'lib',
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'v-per',
      formats: ['cjs', 'es'],
      fileName: (format) => `index.${format}.js`
    }
  }
});
