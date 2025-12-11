@echo off
chcp 65001 >nul
echo ====================================
echo 🚀 ДЕПЛОЙ БЭКЕНДА НА RAILWAY
echo ====================================
echo.

echo 📋 АВТОМАТИЧЕСКИЙ ДЕПЛОЙ:
echo.
echo 1. Установите Railway CLI:
echo    npm install -g @railway/cli
echo.
echo 2. Запустите из папки бэкенда:
echo    cd C:\Users\User\Downloads\Full_Stack\Full_Stack
echo    railway login
echo    railway init
echo    railway up
echo.
echo ====================================
echo 📝 РУЧНОЙ ДЕПЛОЙ (ПРОЩЕ):
echo ====================================
echo.
echo Откроется браузер для Railway...
pause
start https://railway.app/new

echo.
echo 📋 ШАГ ЗА ШАГОМ:
echo.
echo 1. Нажмите "Deploy from GitHub repo"
echo 2. Выберите репозиторий: userwhoga/fullstack
echo 3. Выберите папку: Full_Stack (если нужно)
echo 4. Railway автоматически определит Spring Boot
echo.
echo 5. НАСТРОЙТЕ ПЕРЕМЕННЫЕ ОКРУЖЕНИЯ:
echo    - Откройте проект → Variables
echo    - Добавьте:
echo      SPRING_DATASOURCE_URL=jdbc:mariadb://HOST:PORT/DATABASE
echo      SPRING_DATASOURCE_USERNAME=your_username
echo      SPRING_DATASOURCE_PASSWORD=your_password
echo.
echo 6. Скопируйте URL бэкенда (типа: https://your-app.railway.app)
echo.
echo 7. ОБНОВИТЕ ФРОНТЕНД:
echo    - Откройте Netlify
echo    - Site settings → Environment variables
echo    - Добавьте: VITE_API_URL = https://your-app.railway.app
echo    - Redeploy site
echo.
echo ====================================
echo 💡 СОВЕТ: Railway дает бесплатно $5/месяц
echo ====================================
echo.
pause
exit /b 0
