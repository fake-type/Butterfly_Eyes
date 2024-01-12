import solid from 'vite-plugin-solid'
import TSConfigPath from 'vite-tsconfig-paths'
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin'
import { defineConfig } from 'vitest/config'

export default defineConfig({
  server: { port: 8080 },
  test: { environment: 'jsdom' },
  plugins: [vanillaExtractPlugin(), TSConfigPath(), solid()]
})
