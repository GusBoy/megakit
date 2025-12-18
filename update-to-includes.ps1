Write-Host "Updating all HTML files to use includes.js..." -ForegroundColor Green
Write-Host ""

$files = @(
    "about.html",
    "service.html", 
    "contact.html",
    "pricing.html",
    "project.html",
    "blog-grid.html",
    "blog-sidebar.html",
    "blog-single.html"
)

foreach($file in $files) {
    if (Test-Path $file) {
        $content = Get-Content $file -Raw -Encoding UTF8
        
        # Replace load-includes.js with includes.js
        if ($content -match 'load-includes\.js') {
            $content = $content -replace 'load-includes\.js', 'includes.js'
            $content | Set-Content -Path $file -Encoding UTF8 -NoNewline
            Write-Host "? Updated: $file" -ForegroundColor Green
        } else {
            Write-Host "? Skipped: $file (already updated or no script found)" -ForegroundColor Yellow
        }
    } else {
        Write-Host "? Not found: $file" -ForegroundColor Red
    }
}

Write-Host ""
Write-Host "Update complete!" -ForegroundColor Green
Write-Host ""
Write-Host "Now you can:" -ForegroundColor Cyan
Write-Host "1. Open index.html in your browser (file:// will work!)"
Write-Host "2. Or commit and push to GitHub Pages"
Write-Host ""
