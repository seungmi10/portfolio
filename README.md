# Seungmi Yoon Portfolio

## 처음 실행하기

1. Node.js 설치 (https://nodejs.org — LTS 버전)
2. 터미널에서 이 폴더로 이동한 뒤:

```
npm install
npm run dev
```

3. 브라우저에서 http://localhost:3000 열기

---

## 내가 만질 파일은 딱 3개

| 파일 | 용도 |
|---|---|
| `data/projects.ts` | 작업물 추가/수정 |
| `data/site.ts` | 색상, 이메일, 3D 설정 |
| `app/globals.css` | 디자인 스타일 |

나머지는 건드릴 일 없습니다.

---

## 작업물 추가하는 법

1. 이미지를 `public/images/works/` 폴더에 넣기
2. `data/projects.ts` 열어서 아래 블록을 복사해 붙여넣고 내용 수정:

```ts
{
  slug: "my-new-work",
  title: "새 작업물",
  category: "graphic",
  year: "2026",
  description: "설명",
  thumbnail: "/images/works/my-image.jpg",
  images: ["/images/works/my-image.jpg"],
},
```

3. 저장하면 브라우저가 자동으로 새로고침됩니다.

`slug`는 URL이 되므로 영문/숫자/하이픈만, 중복 금지.

---

## 3D 모델 조절

`data/site.ts` 의 `scene` 부분:

- `modelScale` — 크기
- `modelPosition` — 위치 [좌우, 위아래, 앞뒤]
- `dithering.gridSize` — 디더링 점 크기 (숫자 키우면 거칠어짐)
- `autoRotate` — 자동 회전 on/off

숫자 바꾸고 저장 → 브라우저에서 바로 확인.

---

## 배포 (Vercel)

1. GitHub에 이 폴더를 올림
2. vercel.com 가입 → Import Project → 저장소 선택
3. 끝. 이후 GitHub에 수정사항 올릴 때마다 자동 배포

---

## Credits

디더링 셰이더: [niccolofanton/dithering-shader](https://github.com/niccolofanton/dithering-shader) (MIT)
