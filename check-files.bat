@echo off
echo Updating all HTML files...

for %%f in (*.html) do (
    echo Checking %%f...
    findstr /C:"includes.js" "%%f" >nul
    if errorlevel 1 (
        echo   Needs update: %%f
    ) else (
        echo   OK: %%f
    )
)

echo.
echo Done!
pause
