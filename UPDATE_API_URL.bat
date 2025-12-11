@echo off
chcp 65001 >nul
echo ====================================
echo 🔄 ОБНОВЛЕНИЕ API URL
echo ====================================
echo.

echo 📋 После деплоя бэкенда нужно подключить его к фронтенду:
echo.

:INPUT
set /p BACKEND_URL="Введите URL вашего бэкенда (например, https://your-app.railway.app): "

if "%BACKEND_URL%"=="" (
    echo ❌ URL не может быть пустым!
    goto INPUT
)

echo.
echo ✅ URL бэкенда: %BACKEND_URL%
echo.

echo 📝 Обновляю конфигурацию Netlify...
echo.

echo ====================================
echo 🌐 ОТКРОЙТЕ NETLIFY:
echo ====================================
echo.
start https://app.netlify.com/sites/fullstack9569/configuration/env
echo.
echo Откроется страница Environment Variables...
echo.
pause

echo.
echo 📋 ДОБАВЬТЕ ПЕРЕМЕННУЮ:
echo.
echo    Key:   VITE_API_URL
echo    Value: %BACKEND_URL%
echo.
echo 💡 Нажмите "Save"
echo.
pause

echo.
echo 🚀 REDEPLOY САЙТА:
echo.
start https://app.netlify.com/sites/fullstack9569/deploys
echo.
echo 📋 На странице деплоев:
echo    1. Нажмите "Trigger deploy"
echo    2. Выберите "Deploy site"
echo.
echo ⏳ Подождите 2-3 минуты...
echo.
pause

echo.
echo ====================================
echo   ✅ ГОТОВО!
echo ====================================
echo.
echo 🌐 Ваш сайт: https://fullstack9569.netlify.app
echo 🔧 API URL:   %BACKEND_URL%
echo.
echo 💡 Проверьте работу приложения!
echo.
pause
exit /b 0
