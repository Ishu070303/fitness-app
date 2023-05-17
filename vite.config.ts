import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path' // it comes from @types/nodes

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [{ find: "@", replacement: path.resolve(__dirname, "src") }], //it gonna replace ../../ to @ 
  },
})
