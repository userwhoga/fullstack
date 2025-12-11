@echo off
chcp 65001 >nul
echo ====================================
echo   🐳 Docker Launcher - Chapter 17
echo ====================================
echo.

REM Проверка Docker
echo [1/5] Проверка Docker...
docker --version >nul 2>&1
if errorlevel 1 (
    echo ❌ ОШИБКА: Docker не найден!
    echo.
    echo 📋 Решение:
    echo 1. Включите виртуализацию в BIOS ^(F2/Del при загрузке^)
    echo 2. Установите Docker Desktop
    echo 3. Запустите Docker Desktop
    echo.
    pause
    exit /b 1
)
echo ✅ Docker установлен

REM Проверка что Docker Engine запущен
echo.
echo [2/5] Проверка Docker Engine...
docker ps >nul 2>&1
if errorlevel 1 (
    echo ⚠️  Docker Engine не запущен. Запускаю Docker Desktop...
    start "" "C:\Program Files\Docker\Docker\Docker Desktop.exe"
    echo Ожидание запуска Docker Engine ^(30 секунд^)...
    timeout /t 30 /nobreak >nul
    
    REM Повторная проверка
    docker ps >nul 2>&1
    if errorlevel 1 (
        echo ❌ Docker Engine не запустился. Запустите Docker Desktop вручную!
        pause
        exit /b 1
    )
)
echo ✅ Docker Engine работает

REM Остановка старых контейнеров
echo.
echo [3/5] Остановка старых контейнеров...
docker-compose down >nul 2>&1
echo ✅ Старые контейнеры остановлены

REM Запуск docker-compose
echo.
echo [4/5] Запуск сервисов ^(это может занять несколько минут^)...
docker-compose up -d --build

if errorlevel 1 (
    echo.
    echo ❌ ОШИБКА при запуске контейнеров!
    echo.
    echo 📋 Проверьте логи:
    echo    docker-compose logs
    echo.
    pause
    exit /b 1
)

REM Ожидание готовности сервисов
echo.
echo [5/5] Ожидание запуска сервисов...
timeout /t 5 /nobreak >nul

REM Проверка статуса
echo.
echo 📊 Статус контейнеров:
docker-compose ps

echo.
echo ====================================
echo   ✅ ЗАПУСК ЗАВЕРШЁН!
echo ====================================
echo.
echo 🌐 Ссылки:
echo    Frontend: http://localhost
echo    Database: localhost:3306
echo.
echo 📋 Полезные команды:
echo    npm run compose:logs   - Просмотр логов
echo    npm run compose:down   - Остановка
echo    docker ps              - Список контейнеров
echo.

REM Открыть браузер
echo Открываю браузер...
timeout /t 2 /nobreak >nul
start http://localhost

echo.
echo Нажмите любую клавишу для выхода или Ctrl+C для просмотра логов...
pause >nul

exit /b 0


