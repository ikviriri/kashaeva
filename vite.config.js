import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(({ command }) => ({
  plugins: [react()],
  // Если мы собираем проект для деплоя (build), используем '/kashaeva/'
  // Если запускаем локально (serve), используем '/'
  base: command === 'build' ? '/kashaeva/' : '/',
}))