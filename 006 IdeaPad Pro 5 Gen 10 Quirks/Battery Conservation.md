# 006 / Battery Conservation
Article written by a human: Maingron.

It seems there are 2 different ways in Linux to limit battery charge. Depending on your hardware, only one of them is available.

**IMPORTANT:** Do **NOT** randomly modify files in `/sys/class` as this can cause troubles! Ensure the mentioned files exist. If in doubt, please ask first!  
If using Terminal / Script methods, ensure the respective files exist!

## Index
- [2 value variant](#2-value-variant)
  - Toggle using GUI
- [On/Off variant](#onoff-variant)
  - Toggle using GUI
  - Toggle using Terminal or script
    - Toggle using Terminal
    - Add script to autostart / Use script manually

## 2 value variant
Sadly not available for me.  
However using the GUI method, it's in the same place as the On/Off variant and instead is made of 2 input fields.

### Toggle using GUI
With KDE Plasma, navigate here: System Settings > Power Management > Configure Advanced Settings.  
Then in the section "Charge Limit" you should find 2 input fields with variable charge limits. Modify to your desire, then click apply. Now your laptop shouldn't charge over the threshold.


## On/Off variant
This one is available for me and can be changed using the GUI, **HOWEVER** it resets with every power state change. This is why I created a script. (See below section "Toggle using GUI")

### Toggle using GUI
With KDE Plasma, navigate here: System Settings > Power Management > Configure Advanced Settings. Then in the section "Charge Limit" check the "Limit the maximum battery charge" checkbox. Then click apply. Now your laptop shouldn't charge over the threshold.

### Toggle using Terminal or Script
**Note:** Verify the respective file(s) exist first!
If you're "applicable" for the On/Off variant, and using anything other than the GUI variant, you're looking for a file similar to `/sys/class/power_supply/BAT0/extensions/ideapad_laptop/conservation_mode` (Important part being **conservation_mode**). 
- It's possible for the path to be different!
  - Maybe `BAT0` is a different directory name for you
  - Maybe `ideapad_laptop` is a different directory name for you
  - Maybe the entire path within `/sys/class/` is different for you
  - Maybe this method does not apply to your system
  - Maybe you don't even have a battery?

In my case this method limits the battery charge to 80%.

#### Toggle using Terminal
Note: you can also download and run the script instead ([`scripts/battery_conservation_mode_toggle.sh`](scripts/battery_conservation_mode_toggle.sh).)!  

Run this to toggle conservation mode **on**:
```
echo 1 | sudo tee /sys/class/power_supply/BAT0/extensions/ideapad_laptop/conservation_mode
```
Run this to toggle conservation mode **off**:
```
echo 0 | sudo tee /sys/class/power_supply/BAT0/extensions/ideapad_laptop/conservation_mode
```

#### Add script to autostart / Use script manually
I have to find a friendly solution here - script needs to run as root.  

Script to be found in [`scripts/battery_conservation_mode_toggle.sh`](scripts/battery_conservation_mode_toggle.sh).  
Don't forget to change permissions to allow executing the script.
