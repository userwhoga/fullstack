@echo off
chcp 65001 >nul
echo ====================================
echo   🚀 Deploy to Netlify - Chapter 17
echo ====================================
echo.

REM Проверка Node.js
echo [1/5] Проверка Node.js...
node --version >nul 2>&1
if errorlevel 1 (
    echo ❌ Node.js не установлен!
    echo Установите Node.js с https://nodejs.org
    pause
    exit /b 1
)
echo ✅ Node.js установлен

REM Установка Netlify CLI
echo.
echo [2/5] Установка Netlify CLI...
call npm install -g netlify-cli
if errorlevel 1 (
    echo ❌ Ошибка установки Netlify CLI
    pause
    exit /b 1
)
echo ✅ Netlify CLI установлен

REM Сборка проекта
echo.
echo [3/5] Сборка проекта...
call npm install
if errorlevel 1 (
    echo ❌ Ошибка установки зависимостей
    pause
    exit /b 1
)

call npm run build
if errorlevel 1 (
    echo ❌ Ошибка сборки проекта
    pause
    exit /b 1
)
echo ✅ Проект собран

REM Деплой на Netlify
echo.
echo [4/5] Деплой на Netlify...
echo.
echo 📋 Следуйте инструкциям:
echo    1. Нажмите Enter для авторизации
echo    2. Войдите в браузере через GitHub/Email
echo    3. Выберите: Create & configure a new site
echo    4. Команда build: npm run build
echo    5. Папка publish: dist
echo.
pause

netlify deploy --prod --dir=dist

if errorlevel 1 (
    echo.
    echo ❌ Ошибка деплоя
    pause
    exit /b 1
)

echo.
echo ====================================
echo   ✅ ДЕПЛОЙ ЗАВЕРШЁН!
echo ====================================
echo.
echo 🌐 Ваш сайт опубликован на Netlify!
echo.
echo 📋 Что дальше:
echo    - Скопируйте URL сайта
echo    - Настройте custom domain (опционально)
echo    - При изменениях запустите этот файл снова
echo.
pause
exit /b 0


