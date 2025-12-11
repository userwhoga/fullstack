@echo off
echo ========================================
echo   Starting Full-Stack Application
echo ========================================
echo.
echo This will open 2 terminal windows:
echo   1. Backend (Spring Boot) on port 8081
echo   2. Frontend (React + Vite) on port 5173
echo.
echo Press any key to continue...
pause >nul

echo Starting Backend...
start "Backend - Spring Boot" cmd /k "cd /d C:\Users\User\Downloads\Full_Stack\Full_Stack && gradlew.bat bootRun"

echo Waiting 5 seconds for backend to initialize...
timeout /t 5 /nobreak >nul

echo Starting Frontend...
start "Frontend - React + Vite" cmd /k "cd /d C:\Users\User\Downloads\untitled4\untitled4 && npm run dev"

echo.
echo ========================================
echo   Both servers are starting!
echo ========================================
echo.
echo Backend: http://localhost:8081/swagger-ui.html
echo Frontend: http://localhost:5173
echo.
echo Login credentials:
echo   User: user / user
echo   Admin: admin / admin
echo.
echo Press any key to exit this window...
pause >nul








