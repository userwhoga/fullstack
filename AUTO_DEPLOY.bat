@echo off
chcp 65001 >nul
echo ====================================
echo 🚀 AUTO DEPLOY - One Click Deploy
echo ====================================
echo.

echo [1/2] Устанавливаю Netlify CLI...
call npm install -g netlify-cli
if errorlevel 1 (
    echo ❌ Ошибка установки
    pause
    exit /b 1
)
echo ✅ Netlify CLI установлен

echo.
echo [2/2] Деплой на Netlify...
echo.
echo 📋 Сейчас откроется браузер для авторизации...
echo.
pause

REM Собираем проект
echo Сборка проекта...
call npm run build
if errorlevel 1 (
    echo ❌ Ошибка сборки
    pause
    exit /b 1
)

REM Деплой на Netlify
echo.
echo 🚀 Деплой на Netlify...
call netlify deploy --prod --dir=dist

echo.
echo ====================================
echo   ✅ ДЕПЛОЙ ЗАВЕРШЁН!
echo ====================================
echo.
echo 🌐 Ваш сайт опубликован!
echo.
echo 📋 Полезные команды:
echo    netlify open       - Открыть dashboard
echo    netlify status     - Проверить статус
echo    netlify logs       - Посмотреть логи
echo.
pause
exit /b 0

