# Start local web server
Write-Host "Starting local web server..." -ForegroundColor Green
Write-Host ""
Write-Host "Open your browser and go to: http://localhost:8000" -ForegroundColor Yellow
Write-Host ""
Write-Host "Press Ctrl+C to stop the server" -ForegroundColor Cyan
Write-Host ""

# Try Python first
if (Get-Command python -ErrorAction SilentlyContinue) {
    python -m http.server 8000
}
elseif (Get-Command python3 -ErrorAction SilentlyContinue) {
    python3 -m http.server 8000
}
else {
    Write-Host "Python not found. Trying PHP..." -ForegroundColor Yellow
    if (Get-Command php -ErrorAction SilentlyContinue) {
        php -S localhost:8000
    }
    else {
        Write-Host "Neither Python nor PHP found." -ForegroundColor Red
        Write-Host "Please install Python or PHP to run a local server." -ForegroundColor Red
        Write-Host ""
        Write-Host "Alternative: Use Visual Studio Code with Live Server extension" -ForegroundColor Yellow
        pause
    }
}
