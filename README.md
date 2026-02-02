# DYNA Landing Page

Landing page cho DYNA - Copilote IA cho freelancers.

## Công Nghệ

- React + TypeScript
- Vite
- Framer Motion
- CSS Modules

## Development

```bash
# Cài đặt dependencies
npm install

# Chạy development server
npm run dev

# Build production
npm run build

# Preview build
npm run preview
```

## Deploy lên GitHub Pages

Xem file [DEPLOY.md](./DEPLOY.md) để biết hướng dẫn chi tiết.

### Nhanh:

1. Push code lên GitHub:
```bash
git add .
git commit -m "Deploy setup"
git push origin main
```

2. Vào **Settings** > **Pages** trên GitHub repository
3. Chọn **Source**: GitHub Actions
4. Website sẽ tự động deploy!

URL: `https://cong-dev-oss.github.io/Dyna-LandingPage/`

## Cấu Trúc Dự Án

```
DYNA/
├── src/
│   ├── components/     # React components
│   ├── pages/          # Page components
│   └── main.tsx        # Entry point
├── public/             # Static assets
└── dist/              # Build output
```

## License

© Digital Unicorn. Tous droits réservés.
