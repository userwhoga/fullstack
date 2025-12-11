@echo off
chcp 65001 >nul
echo ====================================
echo   🔄 Docker Rebuild - Chapter 17
echo ====================================
echo.

echo [1/3] Остановка контейнеров...
docker-compose down
echo ✅ Контейнеры остановлены

echo.
echo [2/3] Пересборка образов...
docker-compose build --no-cache

if errorlevel 1 (
    echo.
    echo ❌ ОШИБКА при пересборке образов!
    pause
    exit /b 1
)
echo ✅ Образы пересобраны

echo.
echo [3/3] Запуск контейнеров...
docker-compose up -d

if errorlevel 1 (
    echo.
    echo ❌ ОШИБКА при запуске контейнеров!
    pause
    exit /b 1
)

echo.
echo ✅ Пересборка завершена!
echo.
echo 📊 Статус контейнеров:
docker-compose ps

echo.
echo 🌐 Frontend: http://localhost
echo.
pause
exit /b 0


