import { UserConfig } from 'vitest/config'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
const config: UserConfig = {
  plugins: [vue()],
  // vi.mock not working when base is set different to '/'
  base: '/service/test',
  test: {
    environment: 'jsdom'
  }
}

export default config
