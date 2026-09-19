# 006 IdeaPad Quirks
## Pro 5 Gen 10
Article written by a human: Maingron.

I own a Lenovo IdeaPad Pro 5 Gen 10 Laptop with AMD CPU and I **use it with Linux (CachyOS)**. During my time using the laptop with Linux I came across some quirks and created some scripts. Here I share them.

> This repo / wiki focusses on **IdeaPad Pro 5 Gen 10 with NVIDIA 5050**, but will also apply to other systems!

To understand the repository better, its probably important to know how I use my Linux installation. See [My general usage](#my-general-usage).

If you're unsure about technical terms used, there is a [section at the bottom explaining some terms](#technical-terms)!


## My general usage
I dual-boot **Windows** *(OS)* and **CachyOS** *(OS)* with **Limine** *(Bootloader)*. I usually only boot into Windows when updating the BIOS or configuring my Corsair Mouse however, since this is way easier to do in Windows 11. That said: Don't buy hardware that relies on proprietary software only running on Windows - vote with your money!

### Linux
My installation:
- **CachyOS** with self-built kernel: 7.2.2-1-**cachyos-bore-custom**
  - Version number changes regularly
- **KDE Plasma**
- Using USB / Thunderbolt dock **Hama 00200200** (wouldn't recommend this one!)
  - The **Hama 00200200** dock seems to have difficulties talking to Linux
  - Tends to crash Linux
  - "Only" accepts 140 Watts of power, probably delivering less to the laptop. Laptop can need up to 160 Watts or more
  - While the dock seems to have difficulties talking to Linux, new updates usually slightly improve the situation


## Good to know about the **Hardware**
- Laptop contains an unpopulated M.2 NVME slot
  - I populated said slot with a *WD_BLACK SN850X NVMe SSD 4 TB*, which I had ordered 09. August 2025
  - My Linux + bootloader is installed on the included NVME SSD *WD PC SN7100S SDFPMSL-1T00-1101*. The installation on this SSD used to be pretty fast, but after almost a year there are moments where it's just unbelievably slow. In the future I'd install Linux on the afforementioned 4TB SSD I bought.
- Power Button can **not** be used while the lid is closed
- Laptop contains 2 GPUs, depending on configuration.
  - **AMD Radeon 860M** Integrated Graphics
  - **NVIDIA RTX 5050 Laptop** GPU (Slower than non-laptop variant)
- Speakers are relatively loud, but don't produce a lot of bass
- OLED **Screen**
  - Resolution: 2880x1800 (16:10 aspect ratio)
  - Refresh Rate: 120 FPS
  - Very bright!
  - Supports HDR
  - Seems very fragile.
    - It seems to have a thin plastic film / foil as top layer, and I'm very afraid of scratching it while cleaning
    - Plastic film / foil on top seems wavy
- Laptop is slim
- Laptop has tons of performance, especially for being this thin
- **USB / Connectivity**
  - Has 2 **USB-C** ports with **USB 4** and **Thunderbolt 4** support
  - Has 2 **USB-A** ports with **USB 3** support (I believe)
  - Supports charging over **USB C** and over Lenovo charging port (160 W)
  - Has 1 **HDMI port** that seems to have significantly worse performance than connecting to a HDMI port via a USB / Thunderbolt dock
  - Has 1 Headphone jack
  - Has 1 SD card reader
    - SD Card sticks out

## Quirks (and solutions) in **Linux**
### Limiting battery charge
It seems there are 2 different ways in Linux to limit battery charge. Depending on your hardware, only one of them is available.

**IMPORTANT:** Do **NOT** randomly modify files in `/sys/class` as this can cause troubles! Ensure the mentioned files exist. If in doubt, please ask first!

#### 2 value variant
Sadly not available for me.  
However using the GUI method, it's in the same place as the On/Off variant and instead is made of 2 input fields.

##### Toggle using GUI
With KDE Plasma, navigate here: System Settings > Power Management > Configure Advanced Settings.  
Then in the section "Charge Limit" you should find 2 input fields with variable charge limits. Modify to your desire, then click apply. Now your laptop shouldn't charge over the threshold.


#### On/Off variant
This one is available for me and can be changed using the GUI, **HOWEVER** it resets with every power state change. This is why I created a script. (See below section "Toggle using GUI")

##### Toggle using GUI
With KDE Plasma, navigate here: System Settings > Power Management > Configure Advanced Settings. Then in the section "Charge Limit" check the "Limit the maximum battery charge" checkbox. Then click apply. Now your laptop shouldn't charge over the threshold.

##### Toggle using Terminal or Script
**Note:** Verify the respective file(s) exist first!
If you're "applicable" for the On/Off variant, and using anything other than the GUI variant, you're looking for a file similar to `/sys/class/power_supply/BAT0/extensions/ideapad_laptop/conservation_mode` (Important part being **conservation_mode**). 
- It's possible for the path to be different!
  - Maybe `BAT0` is a different directory name for you
  - Maybe `ideapad_laptop` is a different directory name for you
  - Maybe the entire path within `/sys/class/` is different for you
  - Maybe this method does not apply to your system
  - Maybe you don't even have a battery?

In my case this method limits the battery charge to 80%.

###### Toggle using Terminal
Note: you can also download and run the script instead ([`scripts/battery_conservation_mode_toggle.sh`](scripts/battery_conservation_mode_toggle.sh).)!  

Run this to toggle conservation mode **on**:
```
echo 1 | sudo tee /sys/class/power_supply/BAT0/extensions/ideapad_laptop/conservation_mode
```
Run this to toggle conservation mode **off**:
```
echo 0 | sudo tee /sys/class/power_supply/BAT0/extensions/ideapad_laptop/conservation_mode
```

###### Add script to autostart / Use script manually
I have to find a friendly solution here - script needs to run as root.  

Script to be found in [`scripts/battery_conservation_mode_toggle.sh`](scripts/battery_conservation_mode_toggle.sh).  
Don't forget to change permissions to allow executing the script.




## Technical **Terms**
### OS
The Operating System, like **Windows** or **CachyOS**.

### Bootloader
The bootloader is responsible for booting a computer and booting an operating system. It may also provide an interactive menu with multiple boot choices for Operating Systems (like Windows or CachyOS), in which case it is often called a **boot manager**. [Source][tt1]

### Thunderbolt

<!-- Sources for Technical Terms: -->
[tt1]: https://en.wikipedia.org/wiki/Bootloader
