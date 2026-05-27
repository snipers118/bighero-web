@echo off
set PATH=D:\laragon\bin\nodejs\node-v22;%PATH%
echo Node version:
node -v
echo.
echo Creating Next.js project...
npx -y create-next-app@latest "D:\laragon\www\bighero\temp-next" --typescript --tailwind --eslint --app --src-dir --import-alias "@/*" --use-npm --yes
echo.
echo Done!
