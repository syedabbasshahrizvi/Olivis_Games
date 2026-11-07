import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // Replace 'YOUR-REPOSITORY-NAME' with your exact GitHub repository name.
  // If deploying to https://USERNAME.github.io/ (user site), use '/' instead.
  base: '/YOUR-REPOSITORY-NAME/',
})
