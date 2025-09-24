:startline
SET mypath=%~dp0
timeout /t 1 /nobreak >nul
if "%mypath:~0,-1%"=="C:\wsl_scriptdir" goto isinvm
goto isnotinvm
color 40
echo "If you see this line, something went very wrong! Please check your system, and the script, and consider reporting."
pause...
exit

:isinvm

reg add "HKCU\Software\Microsoft\Windows\CurrentVersion\Themes\Personalize" /v AppsUseLightTheme /t REG_DWORD /d 0 /f && reg add "HKCU\Software\Microsoft\Windows\CurrentVersion\Themes\Personalize" /v SystemUsesLightTheme /t REG_DWORD /d 0 /f && taskkill /f /im explorer.exe && start explorer.exe

start "" "C:\wsl_scriptdir\installer\BraveBrowserStandaloneSilentNightlySetup.exe"
start "" "C:\wsl_scriptdir\installer\ChromeStandaloneSetup64.exe" "/silent /installer"
start "" "C:\wsl_scriptdir\installer\OperaSetup.exe" "--silent=1 --desktop-shortcut=1 --import-browser-data=0 --launchopera=0 --launchbrowser=0 --enable-stats=0 --consent-given=0 --general-interests=0 --personalized-content=0 --personalized-ads=0 --setdefaultbrowser=0"
start "" "C:\wsl_scriptdir\installer\Firefox Setup ESR.exe" "/S /TaskbarShortcut=true /DesktopShortcut=true /MaintenanceService=false" 
@REM TODO: Add Opera GX again

@REM powershell -Command Add-AppxPackage -Path "C:\wsl_scriptdir\installer\Microsoft.WindowsTerminal_1.19.10573.0_8wekyb3d8bbwe.msixbundle"

exit

:isnotinvm
echo off
if not exist installer\ (
	mkdir installer
	echo "Installer not found. Downloading now."
	timeout /t 1 /nobreak >nul
	call :downloadinstaller
	goto startline

	exit /b
)
call :returnwsbfile >001-temp.wsb
001-temp.wsb
timeout /t 5 /nobreak >nul
del "001-temp.wsb"
exit

:returnwsbfile
echo ^<Configuration^>
echo 	^<MappedFolders^>
echo 		^<MappedFolder^>
echo 			^<HostFolder^>%mypath:~0,-1%^</HostFolder^>
echo 			^<SandboxFolder^>C:\wsl_scriptdir^</SandboxFolder^>
echo 			^<ReadOnly^>true^</ReadOnly^>
echo 		^</MappedFolder^>
echo 	^</MappedFolders^>
echo 	^<LogonCommand^>
echo 		^<Command^>C:\wsl_scriptdir\001-a webdev.cmd^</Command^>
echo 	^</LogonCommand^>
echo 	^<Networking^>true^</Networking^>
echo 	^<vGPU^>Enable^</vGPU^>
echo ^</Configuration^>

exit /b
exit

:downloadinstaller
curl -o "installer\Firefox Setup ESR.exe" -L "https://download.mozilla.org/?product=firefox-esr-latest-ssl&os=win64&lang=en-US"
curl -o "installer\ChromeStandaloneSetup64.exe" -L "https://dl.google.com/tag/s/appguid%%3D%%7B8A69D345-D564-463C-AFF1-A69D9E530F96%%7D%%26iid%%3D%%7B47D0D7C1-C2D1-5419-CF41-72C2A0088A55%%7D%%26lang%%3Den%%26browser%%3D3%%26usagestats%%3D0%%26appname%%3DGoogle%%2520Chrome%%26needsadmin%%3Dprefers%%26ap%%3Dx64-stable-statsdef_1%%26installdataindex%%3Dempty/chrome/install/ChromeStandaloneSetup64.exe"
curl -o "installer\BraveBrowserStandaloneSilentNightlySetup.exe" -L "https://github.com/brave/brave-browser/releases/download/v1.82.170/BraveBrowserStandaloneSilentSetup.exe"
curl -o "installer\OperaSetup.exe" -L "https://download.opera.com/download/get/?id=73821&location=424&nothanks=yes&sub=marine&utm_tryagain=yes"
goto startline

exit \b
