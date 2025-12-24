import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // این خط حیاتیه و اسم ریپازیتوری باید دقیق باشه
  base: '/my-portfolio/', 
})