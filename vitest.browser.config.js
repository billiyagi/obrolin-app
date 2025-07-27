import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  test: {
    include: ['tests/**/*.{test,spec}.{js,jsx}'],
    exclude: ['src/**/*.stories.jsx', 'src/**/*.stories.js'],
    browser: {
      enabled: true,
      provider: 'playwright',
      // https://vitest.dev/guide/browser/playwright
      instances: [
      ]
    }
  }
})
