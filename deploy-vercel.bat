@echo off
chcp 65001 >nul
echo ====================================
echo   🚀 Deploy to Vercel - Chapter 17
echo ====================================
echo.

REM Проверка Node.js
echo [1/4] Проверка Node.js...
node --version >nul 2>&1
if errorlevel 1 (
    echo ❌ Node.js не установлен!
    echo Установите Node.js с https://nodejs.org
    pause
    exit /b 1
)
echo ✅ Node.js установлен

REM Установка Vercel CLI
echo.
echo [2/4] Установка Vercel CLI...
call npm install -g vercel
if errorlevel 1 (
    echo ❌ Ошибка установки Vercel CLI
    pause
    exit /b 1
)
echo ✅ Vercel CLI установлен

REM Установка зависимостей
echo.
echo [3/4] Установка зависимостей...
call npm install
if errorlevel 1 (
    echo ❌ Ошибка установки зависимостей
    pause
    exit /b 1
)
echo ✅ Зависимости установлены

REM Деплой на Vercel
echo.
echo [4/4] Деплой на Vercel...
echo.
echo 📋 Следуйте инструкциям:
echo    1. Войдите через GitHub/Email
echo    2. Выберите scope (личный аккаунт)
echo    3. Link to existing project? N
echo    4. Нажмите Enter для значений по умолчанию
echo.
pause

vercel --prod

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
echo 🌐 Ваш сайт опубликован на Vercel!
echo.
echo 📋 Управление:
echo    vercel --prod  - Обновить деплой
echo    vercel ls      - Список деплоев
echo    vercel rm      - Удалить проект
echo.
pause
exit /b 0


