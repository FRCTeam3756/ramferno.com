import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { cloudflare } from "@cloudflare/vite-plugin";

process.env.CLOUDFLARE_CF_FETCH_ENABLED ??= 'false'

export default defineConfig({
  plugins: [
    react(),
    cloudflare()
  ],
})
