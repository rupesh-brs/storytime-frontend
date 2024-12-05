import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from "vite-plugin-svgr";
import dotenv from "dotenv";

dotenv.config();  // Load .env variables

export default defineConfig({
  plugins: [react(), svgr()],
  server: {
    port: process.env.VITE_PORT || 3000
  }
})
