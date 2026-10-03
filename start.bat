@echo off
title Vedika Chavan Interactive Portfolio Server
echo ====================================================
echo Starting Vedika Chavan Portfolio on http://localhost:3000
echo ====================================================
cd /d "%~dp0"
start http://localhost:3000
node server.js
pause
