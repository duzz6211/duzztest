import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  // 커스텀 도메인(duzztest.com) 사용 시 base는 '/'
  // GitHub Pages 기본 도메인(username.github.io/repo) 사용 시 '/repo/'로 변경
  base: '/',
  plugins: [react()],
  build: {
    outDir: 'docs'  // GitHub Pages용 docs 폴더로 빌드
  }
})
