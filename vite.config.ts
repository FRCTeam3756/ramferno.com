import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { cloudflare } from "@cloudflare/vite-plugin";
import { imagetools } from 'vite-imagetools';

export default defineConfig({
  plugins: [
    react(), 
    cloudflare(),
    imagetools()
  ],
})
