# 003 Linux Prompts in Windows WSL

## How to use
- You need to have WSL installed
- You then need to add the run folder to your path variable
- Restart CMD
- Now you can use commands like `ls` within Windows.

## How it works
Basically you're just calling an alias that routes whatever through WSL, as long as an alias file exists (for example ls.cmd).

## Known Issues
- WSL can't access VeraCrypt drives by default

## Contribute
Feel free to fork the repo and to create a merge request for commands you'd like to have in here!

## How to install WSL
You need to be using Windows 10 or Windows 11.
If you're lucky, you just have to run `wsl --install`. You'll also want to grab "Debian" or "Ubuntu" or something from the Microsoft store.
See https://learn.microsoft.com/windows/wsl/install
