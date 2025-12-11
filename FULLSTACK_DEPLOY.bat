@echo off
chcp 65001 >nul
echo ====================================
echo 🚀 Full-Stack Deploy - Frontend + Backend
echo ====================================
echo.

echo 📦 Что будет задеплоено:
echo   Frontend: Netlify (бесплатно)
echo   Backend:  Railway (бесплатно $5 кредит)
echo.
echo 📋 Репозитории:
echo   Frontend: https://github.com/userwhoga/fullstack
echo   Backend:  (создастся автоматически)
echo.
pause

REM Frontend уже на GitHub
echo.
echo ✅ [1/3] Frontend уже на GitHub!
echo    https://github.com/userwhoga/fullstack
echo.

REM Netlify Deploy
echo [2/3] Деплой Frontend на Netlify...
echo.
echo 📋 ОТКРОЙТЕ В БРАУЗЕРЕ:
echo    https://app.netlify.com/start
echo.
echo Инструкция:
echo 1. Log in with GitHub
echo 2. Import from Git → Deploy with GitHub
echo 3. Выберите: userwhoga/fullstack
echo 4. Build settings:
echo    - Build command: npm run build
echo    - Publish directory: dist
echo 5. Нажмите Deploy site
echo.
echo ⏳ Ждите 2-3 минуты...
echo.
set /p netlify_url="Вставьте URL от Netlify (например: https://your-site.netlify.app): "

REM Railway Deploy для Backend
echo.
echo [3/3] Деплой Backend на Railway...
echo.
echo 📋 ОТКРОЙТЕ В БРАУЗЕРЕ:
echo    https://railway.app/new
echo.
echo Инструкция:
echo 1. Login with GitHub
echo 2. Deploy from GitHub repo → New Project
echo 3. Создайте НОВЫЙ репозиторий для backend:
echo    - Имя: fullstack-backend
echo    - Загрузите: C:\Users\User\Downloads\Full_Stack\Full_Stack
echo 4. Railway автоматически определит Spring Boot
echo 5. Добавьте Database → PostgreSQL (или MariaDB)
echo 6. Настройте переменные окружения
echo.
pause

echo.
echo ====================================
echo   ✅ ДЕПЛОЙ ЗАВЕРШЁН!
echo ====================================
echo.
echo 🌐 Ваши ссылки:
echo    Frontend: %netlify_url%
echo    Backend:  (получите в Railway dashboard)
echo.
echo 📋 Следующие шаги:
echo 1. Обновите VITE_API_URL в Netlify:
echo    Site settings → Environment variables
echo    VITE_API_URL = ваш Railway URL
echo.
echo 2. Redeploy сайт в Netlify
echo.
pause
exit /b 0

