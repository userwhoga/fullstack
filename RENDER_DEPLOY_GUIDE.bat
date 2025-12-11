@echo off
chcp 65001 >nul
echo ====================================
echo 🚀 ДЕПЛОЙ БЭКЕНДА НА RENDER.COM
echo ====================================
echo.
echo Откроется браузер Render.com...
pause
start https://dashboard.render.com/

echo.
echo ====================================
echo 📋 ШАГ ЗА ШАГОМ:
echo ====================================
echo.
echo 1. РЕГИСТРАЦИЯ/ВХОД:
echo    - Нажмите "Get Started" или "Sign In"
echo    - Выберите "Sign in with GitHub"
echo.
pause

echo.
echo 2. СОЗДАНИЕ WEB SERVICE:
echo    - Нажмите "+ New" → "Web Service"
echo    - Выберите репозиторий: userwhoga/fullstack
echo    - Нажмите "Connect"
echo.
pause

echo.
echo 3. НАСТРОЙКИ ПРОЕКТА:
echo.
echo    Name: fullstack-backend
echo    Region: Frankfurt (or any)
echo    Branch: main
echo    Root Directory: backend
echo    Runtime: Docker
echo    Instance Type: Free
echo.
pause

echo.
echo 4. ПЕРЕМЕННЫЕ ОКРУЖЕНИЯ:
echo    Нажмите "Advanced" → "Add Environment Variable"
echo.
echo    Добавьте:
echo    - Key: SERVER_PORT
echo      Value: 8081
echo.
echo    - Key: SPRING_PROFILES_ACTIVE
echo      Value: prod
echo.
pause

echo.
echo 5. DEPLOY:
echo    - Нажмите "Create Web Service"
echo    - Подождите 5-10 минут (первый build долгий)
echo.
pause

echo.
echo 6. ПОЛУЧИТЕ URL:
echo    - После деплоя скопируйте URL (типа: https://fullstack-backend.onrender.com)
echo.
pause

echo.
echo 7. ОБНОВИТЕ ФРОНТЕНД:
echo.
start https://app.netlify.com/sites/fullstack9569/configuration/env
echo.
echo    На Netlify:
echo    - Добавьте переменную: VITE_API_URL
echo    - Значение: [ВАШ URL С RENDER]
echo    - Нажмите Save
echo    - Trigger deploy → Deploy site
echo.
pause

echo.
echo ====================================
echo   ✅ ГОТОВО!
echo ====================================
echo.
echo 🌐 Фронтенд: https://fullstack9569.netlify.app
echo 🔧 Бэкенд: [ВАШ URL С RENDER]
echo.
echo 💡 Первый запуск может быть медленным (холодный старт)
echo.
pause
exit /b 0
