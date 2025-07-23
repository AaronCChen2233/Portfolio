@echo off
echo Building for production...
call npm run build

echo Build completed!
echo.
echo To deploy to GitHub Pages:
echo 1. Make sure you have git configured
echo 2. Run: git add . && git commit -m "Update portfolio"
echo 3. Run: git push origin main
echo 4. Enable GitHub Pages in repository settings
echo.
echo Build files are in the 'dist' folder
pause
