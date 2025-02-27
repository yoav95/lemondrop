import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from '@svgr/rollup';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),svgr({
    svgo: true,
    svgoConfig: {
      plugins: [
        {
          name: 'prefixIds',
          params: {
            prefix: 'x', // Customize this
            prefixIds: true,
          },
        },
      ],
    },
  }),],
})
