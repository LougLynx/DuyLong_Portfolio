@echo off
chcp 65001 >nul
echo ========================================
echo  TẠO FILE .ENV VỚI GROQ API KEY
echo ========================================
echo.
echo Hướng dẫn lấy Groq API key MIỄN PHÍ:
echo 1. Mở: https://console.groq.com/keys
echo 2. Đăng ký/Đăng nhập tài khoản
echo 3. Click "Create API Key"
echo 4. Copy API key
echo.
set /p apikey="Nhập Groq API key của bạn: "
echo.
echo Đang tạo file .env...
echo VITE_GROQ_API_KEY=%apikey%> .env
echo.
echo ✅ File .env đã được tạo thành công!
echo.
echo Bây giờ hãy chạy: npm run dev
echo.
pause

