import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  // GitHub Pages(https://{user}.github.io/{repo}/) 배포 시 assets 경로가 깨지지 않도록 base를 repo 경로로 맞춥니다.
  // GitHub Actions 환경에서는 GITHUB_REPOSITORY = "owner/repo" 형태로 제공됩니다.
  base: process.env.GITHUB_REPOSITORY ? `/${process.env.GITHUB_REPOSITORY.split('/')[1]}/` : '/',
  plugins: [react()],
})

