import dotenv from "dotenv";

dotenv.config();  


import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from "vite-plugin-svgr";


export default defineConfig({
  plugins: [react(), svgr()],
  server: {
    port: process.env.VITE_PORT || 3000,
    host: "0.0.0.0",
  },
});
