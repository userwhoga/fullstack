@echo off
echo ========================================
echo   Installing Dependencies
echo ========================================
echo.
echo This will install:
echo   - react-router-dom@6
echo   - ag-grid-community
echo   - ag-grid-react
echo.
echo Press any key to continue...
pause >nul

echo.
echo Installing dependencies...
call npm install

echo.
echo ========================================
echo   Installation Complete!
echo ========================================
echo.
echo Now you can run: npm run dev
echo.
pause








