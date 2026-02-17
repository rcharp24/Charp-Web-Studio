# Connect Charp Web Studio to GitHub
# Run this script AFTER installing Git: https://git-scm.com/download/win

Set-Location $PSScriptRoot

Write-Host "Initializing Git..." -ForegroundColor Cyan
git init

Write-Host "Adding all files..." -ForegroundColor Cyan
git add .

Write-Host "Creating initial commit..." -ForegroundColor Cyan
git commit -m "Initial commit"

Write-Host "Adding GitHub remote..." -ForegroundColor Cyan
git remote add origin https://github.com/rcharp24/Charp-Web-Studio.git

Write-Host "Setting branch to main..." -ForegroundColor Cyan
git branch -M main

Write-Host "Pulling existing README from GitHub (if any)..." -ForegroundColor Cyan
git pull origin main --allow-unrelated-histories --no-edit 2>$null
if ($LASTEXITCODE -ne 0) { Write-Host "No existing content to pull - that's OK." -ForegroundColor Yellow }

Write-Host "Pushing to GitHub..." -ForegroundColor Cyan
git push -u origin main

Write-Host "Done! Your project is connected to https://github.com/rcharp24/Charp-Web-Studio" -ForegroundColor Green
