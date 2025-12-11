@echo off
chcp 65001 >nul
echo ====================================
echo   🛑 Docker Stop - Chapter 17
echo ====================================
echo.

echo Остановка всех контейнеров...
docker-compose down

if errorlevel 1 (
    echo.
    echo ❌ ОШИБКА при остановке контейнеров!
    pause
    exit /b 1
)

echo.
echo ✅ Все контейнеры остановлены!
echo.
pause
exit /b 0


