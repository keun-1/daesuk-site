# 대석산업(주) 홈페이지

> 사내 검토용 샘플 사이트입니다. 확정 후 정식 도메인으로 이전 예정입니다.

## 🔗 라이브 사이트

GitHub Pages 활성화 후 URL이 생성됩니다:

```
https://<your-github-username>.github.io/daesuk-site/
```

## 📋 사이트 구성

| 섹션 | 내용 |
|------|------|
| Hero | 현장 영상 배경 + 핵심 메시지 + 신뢰 지표 |
| Equipment | 장비 라인업 (파쇄기 · 플랜트 · 부품) |
| Company | 회사 소개 + 보유 설비 + 납품 실적 |
| Contact | FAQ · 제작 프로세스 · 견적 문의 |
| Map | 본사 위치 |

## 📁 파일 구조

```
daesuk-site/
├── index.html              # 진입점, Tailwind 설정, 글로벌 스타일
├── app.jsx                 # React 루트 컴포넌트, 상태 관리
├── sections.jsx            # 모든 페이지 섹션
├── data.jsx                # 제품·회사·FAQ 데이터
├── icons.jsx               # SVG 아이콘
├── blueprints.jsx          # 장비 도면 SVG
├── logo-transparent.png    # 로고
├── hero-bg.mp4             # Hero 배경 영상 (현장 촬영)
├── hero-poster.jpg         # 영상 로딩 중 표시 이미지
├── catalog.pdf             # 제품 카탈로그 (향후 다운로드 링크용)
├── .nojekyll               # GitHub Pages 설정
└── .gitignore
```

## 🛠️ 기술 스택

- **React 18** (CDN, 빌드 불필요)
- **Tailwind CSS** (CDN)
- **Pretendard + Montserrat** 폰트
- 정적 호스팅 (서버/DB 불필요)

## 🚀 GitHub Pages 배포

1. GitHub에서 새 저장소 생성 (Public, 이름: `daesuk-site`)
2. 이 폴더의 모든 파일을 업로드 (드래그 앤 드롭)
3. Settings → Pages → Branch: `main`, Folder: `/ (root)` → Save
4. 1~2분 후 URL 활성화

자세한 단계는 `배포가이드.md` 참고.

## 💬 피드백

수정 요청은 슬랙/이메일로 알려주세요.

## 📝 향후 계획

회사 검토 완료 후:
- AWS S3 + CloudFront로 이전
- 도메인 연결 (예: daesuk.co.kr)
- SSL 인증서 적용
