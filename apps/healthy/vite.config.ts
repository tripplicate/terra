import { defineConfig } from "vite"

import PluginVue from "@vitejs/plugin-vue"

export default defineConfig(() => {
  return {
    base: "./",
    plugins: [
      PluginVue()
    ]
  }
})