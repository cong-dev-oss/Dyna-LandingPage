# Hướng Dẫn Deploy Lên GitHub Pages

## Phương Pháp 1: Tự Động Deploy với GitHub Actions (Khuyến Nghị)

### Bước 1: Push code lên GitHub

```bash
# Thêm tất cả file vào git
git add .

# Commit thay đổi
git commit -m "Cấu hình deploy GitHub Pages"

# Push lên GitHub (nếu chưa có repository, tạo trước trên GitHub)
git push origin main
```

### Bước 2: Cấu hình GitHub Pages

1. Truy cập repository của bạn trên GitHub
2. Vào **Settings** > **Pages**
3. Ở phần **Source**, chọn **GitHub Actions**
4. Lưu lại

### Bước 3: Chờ Deploy

- Sau khi push code, GitHub Actions sẽ tự động chạy
- Xem tiến trình tại tab **Actions** trên repository
- Sau khi hoàn thành, website sẽ có tại: `https://<username>.github.io/DYNA/`

## Phương Pháp 2: Deploy Thủ Công

### Bước 1: Cài đặt gh-pages

```bash
npm install --save-dev gh-pages
```

### Bước 2: Build và Deploy

```bash
# Build dự án
npm run build

# Deploy lên GitHub Pages
npm run deploy
```

## Lưu Ý Quan Trọng

### 1. Đổi Tên Repository

Nếu repository của bạn không phải là `DYNA`, hãy cập nhật trong `vite.config.ts`:

```typescript
export default defineConfig(({ command }) => {
  const base = command === 'build' ? '/TEN-REPOSITORY-CUA-BAN/' : '/'
  // ... rest of config
})
```

### 2. Kiểm Tra Trước Khi Deploy

```bash
# Chạy build để kiểm tra lỗi
npm run build

# Xem preview local
npm run preview
```

### 3. Xử Lý Lỗi Build

Nếu có lỗi khi build:

1. Kiểm tra terminal để xem lỗi cụ thể
2. Đảm bảo không có lỗi JSX/TypeScript
3. Chạy `npm install` để đảm bảo dependencies đầy đủ

## URL Website Sau Khi Deploy

Sau khi deploy thành công, website sẽ có URL:

```
https://<github-username>.github.io/DYNA/
```

Ví dụ: Nếu username GitHub của bạn là `johndoe`, URL sẽ là:
```
https://johndoe.github.io/DYNA/
```

## Cập Nhật Website

Mỗi khi bạn push code mới lên branch `main`, GitHub Actions sẽ tự động build và deploy lại website.

## Xử Lý Sự Cố

### Website không hiển thị đúng

1. Kiểm tra `base` trong `vite.config.ts` có đúng tên repository không
2. Xóa cache browser và tải lại trang
3. Kiểm tra console browser xem có lỗi không

### GitHub Actions thất bại

1. Vào tab **Actions** trên GitHub
2. Click vào workflow bị lỗi để xem chi tiết
3. Thường là lỗi build, sửa lỗi và push lại

## Cần Trợ Giúp?

- Kiểm tra logs trong tab Actions trên GitHub
- Đảm bảo Settings > Pages đã được cấu hình đúng
- Xem lại file `.github/workflows/deploy.yml`
