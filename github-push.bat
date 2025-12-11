@echo off
chcp 65001 >nul
echo ====================================
echo   📤 GitHub Push - Chapter 17
echo ====================================
echo.

REM Проверка Git
echo [1/6] Проверка Git...
git --version >nul 2>&1
if errorlevel 1 (
    echo ❌ Git не установлен!
    echo Установите Git: https://git-scm.com
    pause
    exit /b 1
)
echo ✅ Git установлен

REM Инициализация Git (если не инициализирован)
echo.
echo [2/6] Инициализация Git репозитория...
if not exist .git (
    git init
    echo ✅ Git репозиторий инициализирован
) else (
    echo ✅ Git репозиторий уже существует
)

REM Настройка Git пользователя (если не настроен)
echo.
echo [3/6] Проверка Git конфигурации...
git config user.name >nul 2>&1
if errorlevel 1 (
    echo.
    set /p git_name="Введите ваше имя для Git: "
    git config --global user.name "!git_name!"
)

git config user.email >nul 2>&1
if errorlevel 1 (
    echo.
    set /p git_email="Введите ваш email для Git: "
    git config --global user.email "!git_email!"
)
echo ✅ Git сконфигурирован

REM Добавление файлов
echo.
echo [4/6] Добавление файлов в Git...
git add .
echo ✅ Файлы добавлены

REM Коммит
echo.
echo [5/6] Создание коммита...
git commit -m "Add Chapter 15-17: Testing and Deployment setup"
if errorlevel 1 (
    echo ⚠️  Нет изменений для коммита или коммит уже существует
) else (
    echo ✅ Коммит создан
)

REM Проверка remote
echo.
echo [6/6] Настройка GitHub репозитория...
git remote -v | findstr origin >nul 2>&1
if errorlevel 1 (
    echo.
    echo 📋 СОЗДАЙТЕ РЕПОЗИТОРИЙ НА GITHUB:
    echo.
    echo 1. Откройте: https://github.com/new
    echo 2. Repository name: carapp-frontend
    echo 3. Visibility: Public (или Private)
    echo 4. НЕ добавляйте README, .gitignore, license
    echo 5. Нажмите "Create repository"
    echo 6. Скопируйте URL репозитория
    echo.
    set /p repo_url="Вставьте URL репозитория (https://github.com/...): "
    
    git remote add origin !repo_url!
    echo ✅ Remote добавлен
) else (
    echo ✅ Remote уже настроен
    git remote -v
)

REM Push на GitHub
echo.
echo 📤 Отправка на GitHub...
git branch -M main
git push -u origin main

if errorlevel 1 (
    echo.
    echo ❌ Ошибка при push!
    echo.
    echo 📋 Возможные причины:
    echo 1. Нужна авторизация в Git
    echo 2. Неверный URL репозитория
    echo 3. Нет прав доступа
    echo.
    echo 💡 Решение:
    echo git config --global credential.helper wincred
    echo git push -u origin main
    echo.
    pause
    exit /b 1
)

echo.
echo ====================================
echo   ✅ УСПЕШНО ЗАГРУЖЕНО НА GITHUB!
echo ====================================
echo.
echo 🎯 Следующие шаги (Netlify Deploy):
echo.
echo 1. Откройте: https://app.netlify.com
echo 2. Войдите через GitHub
echo 3. "Add new site" → "Import an existing project"
echo 4. "Deploy with GitHub"
echo 5. Выберите ваш репозиторий
echo 6. Build command: npm run build
echo 7. Publish directory: dist
echo 8. Нажмите "Deploy site"
echo.
echo 🌐 Через 2-3 минуты сайт будет готов!
echo.
pause
exit /b 0

