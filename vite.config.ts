import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'
import ssr from 'vite-plugin-ssr/plugin'

// https://vitejs.dev/config https://vitest.dev/config
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const userConfig = defineConfig({
  plugins: [react(), tsconfigPaths(), ssr()],
  test: {
    setupFiles: '.vitest/setup',
    globals: true,
    environment: 'happy-dom',
    include: [`**/test.{ts,tsx}`],
    deps: {
      interopDefault: true
    }
  },
  ssr: false
})
export default userConfig
