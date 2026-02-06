# DUZZ - Coming Soon Page

전문적인 준비 중 페이지입니다.

## 개발 환경 실행

```bash
npm install
npm run dev
```

## GitHub Pages에 배포

### 1단계: GitHub 저장소 생성 및 연결

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git push -u origin main
```

### 2단계: GitHub Pages로 배포

```bash
npm run deploy
```

이 명령어를 실행하면 자동으로:
- 프로젝트를 빌드하고
- `gh-pages` 브랜치에 배포됩니다

### 3단계: GitHub 저장소 설정

1. GitHub 저장소로 이동
2. **Settings** > **Pages**
3. **Source**에서 `gh-pages` 브랜치 선택
4. **Custom domain**에 `duzztest.com` 입력
5. **Enforce HTTPS** 체크

### 4단계: 도메인 DNS 설정

도메인 제공업체에서 다음 DNS 레코드를 추가하세요:

**A 레코드:**
```
@  ->  185.199.108.153
@  ->  185.199.109.153
@  ->  185.199.110.153
@  ->  185.199.111.153
```

**CNAME 레코드 (선택사항):**
```
www  ->  YOUR_USERNAME.github.io
```

DNS 적용까지 최대 24시간이 걸릴 수 있습니다.

## 프로덕션 빌드만 하기

```bash
npm run build
```

빌드된 파일은 `dist` 폴더에 생성됩니다.

## 나중에 프로젝트 교체

이 프로젝트는 표준 React + Vite 구조로 되어있어, 나중에 쉽게 다른 React 프로젝트로 교체할 수 있습니다.

