# DYNA Landing Page

Landing page React/TypeScript

## Cấu trúc dự án

```
DYNA/
├── public/          # Ảnh, SVG, tài nguyên tĩnh
├── src/
│   ├── components/   # Component React
│   ├── pages/       # Trang landing + landing/motionVariants, landingData
│   ├── global.css
│   ├── chakra-theme.ts
│   └── main.tsx
├── index.html
├── package.json
├── tsconfig.json
└── vite.config.ts
```

## Chạy dự án

**Yêu cầu:** Node.js 16+, npm hoặc yarn.

Cài đặt và chạy:

```bash
npm install
npm run dev
```

Mở trình duyệt tại `http://localhost:3000`.

Build production:

```bash
npm run build
```

Kết quả build nằm trong thư mục `dist/`.

## Công nghệ

- React 18, TypeScript
- Vite (build và dev server)
- Framer Motion (animation)
- CSS

## Ghi chú

- Trang chính: `src/pages/DYNALANDINGPAGE.tsx`
- Animation: `src/pages/landing/motionVariants.ts`
- Dữ liệu landing: `src/pages/landing/landingData.ts`
