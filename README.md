# 대석산업(주) 홈페이지

- 공개 주소: https://keun-1.github.io/daesuk-site/
- 이 브랜치(main)에는 빌드된 배포본만 둠. GitHub Pages 가 main 의 최상위 폴더를 그대로 공개함.
- 내용을 고칠 때는 `source` 브랜치의 원본을 수정하고 아래처럼 다시 빌드한 뒤, 만들어진 `dist` 폴더 내용으로 main 을 덮어씀.

```
npm install
npm run build -- --site-url=https://keun-1.github.io/daesuk-site
```

- 회사 도메인을 연결하면 `--site-url` 값을 그 도메인으로 바꿔 다시 빌드함.
- 2026-10-31 교체 전 파일은 `backup-20261031` 브랜치에 그대로 보관함.
