## Regarding camera_to_v4l2.sh
You can run the script manually (I tested with sudo under CachyOS), or you can add it to your udev rules to run automatically when you connect your phone. Then just access the camera device as usual.
You can get your phone's vendor and product ID with `lsusb`.

`nano /etc/udev/rules.d/99-PHONE_NAME-webcam.rules` => 

```bash
# Important: Replace 04e8 and 6860 with your phone's vendor and product ID, and PATH_TO_SCRIPT.sh with the actual path to your script.
# Ensure the script is executable.
# Samsung 04e8:6860 plugged in -> start script
ACTION=="add", SUBSYSTEM=="usb", ENV{DEVTYPE}=="usb_device", ATTR{idVendor}=="04e8", ATTR{idProduct}=="6860", \
  RUN+="/usr/bin/systemd-run --unit=camera-to-v4l2 --property=Type=simple --collect /bin/sh -lc 'PATH_TO_SCRIPT.sh'"
```

Then run `sudo udevadm control --reload` to reload the udev rules. Now, when you connect your phone, the script should run automatically.

You can run `sudo systemctl status camera-to-v4l2 -f` to check the status of the service and see any output or errors from the script, although the service wont be active until you connect your phone.

Note the script may both fail to connect to its video output and create unused v4l2loopback devices.  
The first time you run the script, you need to allow adb debugging on your phone.
