# Xử Lý Sự Cố GitHub Pages

## Lỗi: "Get Pages site failed" hoặc "Not Found"

### Nguyên Nhân
GitHub Pages chưa được kích hoạt hoặc cấu hình sai trong repository.

### Giải Pháp

#### Bước 1: Kích Hoạt GitHub Pages
1. Vào repository trên GitHub
2. Click **Settings** → **Pages**
3. Ở **Source**, chọn **GitHub Actions** (KHÔNG phải "Deploy from a branch")
4. Lưu lại

#### Bước 2: Verify Settings
Đảm bảo repository của bạn:
- ✅ Là public repository (hoặc có GitHub Pro nếu là private)
- ✅ Có tab Actions được bật (Settings → Actions → General → Allow all actions)
- ✅ Workflow permissions: Settings → Actions → General → Workflow permissions: "Read and write permissions"

#### Bước 3: Chạy Lại Workflow
1. Vào tab **Actions**
2. Nếu có workflow đang chạy, đợi nó hoàn thành
3. Hoặc click **Run workflow** để chạy lại

---

## Lỗi: Workflow Fails ở Build Step

### Nguyên Nhân
Có lỗi trong code hoặc dependencies.

### Giải Pháp
```bash
# Kiểm tra build local trước
npm install
npm run build

# Nếu có lỗi, sửa rồi commit và push lại
git add .
git commit -m "Fix build errors"
git push origin main
```

---

## Lỗi: Website Hiển thị 404 hoặc Blank Page

### Nguyên Nhân
Base path trong vite.config.ts không đúng với tên repository.

### Giải Pháp
1. Kiểm tra tên repository trên GitHub
2. Cập nhật `vite.config.ts`:
   ```typescript
   const base = command === 'build' ? '/TEN-REPOSITORY/' : '/'
   ```
3. Build lại và push:
   ```bash
   npm run build
   git add .
   git commit -m "Fix base path"
   git push origin main
   ```

---

## Lỗi: CSS/Images Không Load

### Nguyên Nhân
Đường dẫn assets không đúng với base path.

### Giải Pháp
- Đảm bảo trong code sử dụng relative paths: `/image.png` thay vì `./image.png`
- Kiểm tra `vite.config.ts` có đúng base path
- Clear browser cache và reload

---

## Lỗi: Workflow Permission Denied

### Nguyên Nhân
GitHub token không có quyền deploy Pages.

### Giải Pháp
1. Settings → Actions → General
2. Workflow permissions → Chọn "Read and write permissions"
3. Save và chạy lại workflow

---

## Kiểm Tra Workflow Logs

Để xem chi tiết lỗi:
1. Vào tab **Actions**
2. Click vào workflow run bị lỗi (màu đỏ)
3. Click vào job "build-and-deploy"
4. Xem logs của từng step
5. Tìm dòng lỗi màu đỏ

---

## Vẫn Không Được?

### Checklist Cuối Cùng:
- [ ] Repository là public?
- [ ] Settings → Pages → Source = "GitHub Actions"?
- [ ] Settings → Actions → Workflow permissions = "Read and write"?
- [ ] File `.github/workflows/deploy.yml` tồn tại?
- [ ] Branch name trong workflow đúng (main/master)?
- [ ] `npm run build` chạy thành công ở local?
- [ ] Base path trong `vite.config.ts` đúng với tên repo?

### Thử Deploy Thủ Công:
```bash
npm install gh-pages --save-dev
npm run build
npx gh-pages -d dist
```

---

## Liên Hệ

Nếu vẫn gặp vấn đề:
1. Copy toàn bộ error log từ Actions
2. Kiểm tra file `vite.config.ts`
3. Verify Settings → Pages configuration
