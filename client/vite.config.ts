import react from '@vitejs/plugin-react'
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react()],
  base: '/watersite/',
  build: {
    outDir: 'watersite', // Change 'dist' to your preferred folder name
  },
});