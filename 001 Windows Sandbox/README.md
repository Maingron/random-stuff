# 001 Windows Sandbox

## 001-a

So this Windows Sandbox script will spin up a Windows Sandbox and install common web browsers, including
- Chrome
- Firefox
- Brave
- Opera

**Everything will happen in the folder the script is located in.**  

### **On first run**
It'll create a new folder and download installers for browsers into it   
**Then the script will run again**, executing it "normally"  

**Note:** the installers are only downloaded on first run. If you want to update the installers/browsers, just delete the `installers`-folder

### Executing the script
(just double-click)
will temporarily create a sandbox .wsb file, and run it, starting the sandbox.
It'll pass the current directory through to the sandbox as `read-only`.

#### In the VM
the same script will run again, automatically. It'll detect it's running in the sandbox by checking for the passed-through folder in `C:`.
The installers are run automatically, mostly in the background, and you can do whatever you want.

----
You can add your own installers. The script is segmented into corresponding sections. You're also welcome to add browsers and create a PR! Maybe you use a browser nobody else knows :)
