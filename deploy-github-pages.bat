@echo off
chcp 65001 >nul
echo ====================================
echo 🚀 Deploy to GitHub Pages - Ch.17
echo ====================================
echo.

REM Проверка Git
echo [1/5] Проверка Git...
git --version >nul 2>&1
if errorlevel 1 (
    echo ❌ Git не установлен!
    echo Установите Git с https://git-scm.com
    pause
    exit /b 1
)
echo ✅ Git установлен

REM Проверка Node.js
echo.
echo [2/5] Проверка Node.js...
node --version >nul 2>&1
if errorlevel 1 (
    echo ❌ Node.js не установлен!
    pause
    exit /b 1
)
echo ✅ Node.js установлен

REM Установка gh-pages
echo.
echo [3/5] Установка gh-pages...
call npm install --save-dev gh-pages
echo ✅ gh-pages установлен

REM Сборка проекта
echo.
echo [4/5] Сборка проекта...
call npm run build
if errorlevel 1 (
    echo ❌ Ошибка сборки
    pause
    exit /b 1
)
echo ✅ Проект собран

REM Деплой
echo.
echo [5/5] Деплой на GitHub Pages...
call npx gh-pages -d dist

if errorlevel 1 (
    echo.
    echo ❌ Ошибка деплоя
    echo.
    echo 📋 Возможные причины:
    echo    1. Нет Git репозитория (git init)
    echo    2. Нет удалённого репозитория (git remote add origin URL)
    echo    3. Нет прав доступа
    echo.
    pause
    exit /b 1
)

echo.
echo ====================================
echo   ✅ ДЕПЛОЙ ЗАВЕРШЁН!
echo ====================================
echo.
echo 🌐 Ваш сайт будет доступен через 1-2 минуты:
echo    https://YOUR_USERNAME.github.io/YOUR_REPO_NAME
echo.
echo 📋 Настройка в GitHub:
echo    1. Откройте Settings → Pages
echo    2. Source: Deploy from branch
echo    3. Branch: gh-pages, /(root)
echo.
pause
exit /b 0


