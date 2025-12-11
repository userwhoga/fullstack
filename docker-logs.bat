@echo off
chcp 65001 >nul
echo ====================================
echo   📋 Docker Logs - Chapter 17
echo ====================================
echo.
echo Нажмите Ctrl+C для выхода
echo.

docker-compose logs -f

pause
exit /b 0


