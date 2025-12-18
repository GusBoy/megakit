# Build script for GitHub Pages
# This script embeds header and footer into each HTML file

Write-Host "Building site for GitHub Pages..." -ForegroundColor Green
Write-Host ""

# Read header and footer content
$headerContent = Get-Content "includes\header.html" -Raw -Encoding UTF8
$footerContent = Get-Content "includes\footer.html" -Raw -Encoding UTF8

# HTML files to process
$htmlFiles = @(
    "index.html",
    "about.html", 
    "service.html",
    "contact.html",
    "pricing.html",
    "project.html",
    "blog-grid.html",
    "blog-sidebar.html",
    "blog-single.html"
)

foreach ($file in $htmlFiles) {
    if (Test-Path $file) {
        Write-Host "Processing $file..." -ForegroundColor Cyan
        
        $content = Get-Content $file -Raw -Encoding UTF8
        
        # Replace header placeholder
        $content = $content -replace '<!-- Header Placeholder -->\s*<div id="header-placeholder"></div>', $headerContent
        $content = $content -replace '<div id="header-placeholder"></div>', $headerContent
        
        # Replace footer placeholder
        $content = $content -replace '<!-- Footer Placeholder -->\s*<div id="footer-placeholder"></div>', $footerContent
        $content = $content -replace '<div id="footer-placeholder"></div>', $footerContent
        
        # Remove load-includes.js script reference
        $content = $content -replace '<script src="js/load-includes\.js"></script>\s*', ''
        
        # Set active menu item based on filename
        $pageName = [System.IO.Path]::GetFileNameWithoutExtension($file)
        
        # Add active class to current page
        if ($pageName -eq "index") {
            $content = $content -replace '(<li class="nav-item"[^>]*data-page="index"[^>]*>)', '<li class="nav-item active" data-page="index">'
        } else {
            $content = $content -replace "(<li class=`"nav-item(?:\s+dropdown)?`"[^>]*data-page=`"$pageName`"[^>]*>)", '<li class="nav-item active" data-page="' + $pageName + '">'
        }
        
        # Save to build directory
        if (!(Test-Path "build")) {
            New-Item -ItemType Directory -Path "build" | Out-Null
        }
        
        $content | Out-File -FilePath "build\$file" -Encoding UTF8 -NoNewline
        
        Write-Host "  ? $file built successfully" -ForegroundColor Green
    } else {
        Write-Host "  ? $file not found" -ForegroundColor Red
    }
}

# Copy assets to build directory
Write-Host ""
Write-Host "Copying assets..." -ForegroundColor Cyan

$assetFolders = @("css", "js", "images", "plugins")

foreach ($folder in $assetFolders) {
    if (Test-Path $folder) {
        Copy-Item -Path $folder -Destination "build\$folder" -Recurse -Force
        Write-Host "  ? $folder copied" -ForegroundColor Green
    }
}

# Remove load-includes.js from build
if (Test-Path "build\js\load-includes.js") {
    Remove-Item "build\js\load-includes.js" -Force
}

Write-Host ""
Write-Host "Build completed! Files are in the 'build' folder." -ForegroundColor Green
Write-Host "You can now commit and push the 'build' folder to GitHub Pages." -ForegroundColor Yellow
Write-Host ""
