@echo off
chcp 65001 >nul
echo ========================================
echo  CẬP NHẬT GROQ API KEY
echo ========================================
echo.
echo Hướng dẫn lấy Groq API key MIỄN PHÍ:
echo 1. Mở: https://console.groq.com/keys
echo 2. Đăng ký/Đăng nhập tài khoản
echo 3. Click "Create API Key"
echo 4. Copy API key
echo.
set /p apikey="Nhập Groq API key mới của bạn: "
echo.
echo Đang cập nhật file .env...
echo VITE_GROQ_API_KEY=%apikey%> .env
echo.
echo ✅ Đã cập nhật thành công!
echo.
echo Bây giờ hãy:
echo 1. Restart dev server (Ctrl+C rồi npm run dev)
echo 2. Reload trang web (Ctrl+Shift+R)
echo.
pause

