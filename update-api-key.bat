@echo off
chcp 65001 >nul
echo ========================================
echo  CẬP NHẬT GEMINI API KEY
echo ========================================
echo.
echo Hướng dẫn lấy API key:
echo 1. Mở: https://aistudio.google.com/app/apikey
echo 2. Click "Create API key in new project"
echo 3. Copy API key
echo.
set /p apikey="Nhập API key mới của bạn: "
echo.
echo Đang cập nhật file .env...
echo VITE_GEMINI_API_KEY=%apikey%> .env
echo.
echo ✅ Đã cập nhật thành công!
echo.
echo Bây giờ hãy:
echo 1. Restart dev server (Ctrl+C rồi npm run dev)
echo 2. Reload trang web (Ctrl+Shift+R)
echo.
pause

