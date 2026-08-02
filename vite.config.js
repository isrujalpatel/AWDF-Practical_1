import { defineConfig } from 'vite'
import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import babel from '@rolldown/plugin-babel'

export default defineConfig({
  base: '/AWDF-Practical_1/',
  plugins: [
    react(),
    babel({
      presets: [reactCompilerPreset()]
    })
  ],
})