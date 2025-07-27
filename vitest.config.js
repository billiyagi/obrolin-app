import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  test: {
    include: ['tests/**/*.{test,spec}.{js,jsx}'], // hanya folder tests
    exclude: ['src/**/*.stories.{js,jsx}'], // exclude semua storybook
    environment: 'jsdom',
    setupFiles: './tests/setup.js'
  }
})
