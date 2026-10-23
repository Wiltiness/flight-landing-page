import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'


export default defineConfig({
    plugins: [react(), tailwindcss()],  server: {
        host: '0.0.0.0', // 监听所有地址
        port: 5173,
    },
})
