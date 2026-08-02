import { defineConfig } from 'vite'
import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import babel from '@rolldown/plugin-babel'

export default defineConfig({
  base: '/24CS076_P1/',   // Your repository name
  plugins: [
    react(),
    babel({
      presets: [reactCompilerPreset()]
    })
  ],
})