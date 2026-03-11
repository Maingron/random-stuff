#!/bin/sh
set -eu
VIDEO_NR=$(find /dev/ -name "video*" | wc -l)
# VIDEO_NR=13
DEVP="/dev/video${VIDEO_NR}"
VIDEO_HEIGHT=1080
VIDEO_WIDTH=1920
VIDEO_FPS=60
VIDEO_CODEC="h265" # h264, h265, av1
CAMERA_ID=2
SCRCPY_ADD_ARGS=""
# SCRCPY_ADD_ARGS="--no-window"


# Fix XDG_RUNTIME_DIR for sudo
export XDG_RUNTIME_DIR=/run/user/0
export SDL_VIDEODRIVER=dummy

modprobe -r v4l2loopback || true

sleep .25

modprobe v4l2loopback devices=1 video_nr="$VIDEO_NR" card_label=scrcpy-cam exclusive_caps=0 max_width=$VIDEO_WIDTH max_height=$VIDEO_HEIGHT

sleep .25

scrcpy --video-source=camera --camera-id=$CAMERA_ID --camera-size="${VIDEO_WIDTH}x${VIDEO_HEIGHT}" --no-audio --v4l2-sink="$DEVP" --video-codec=$VIDEO_CODEC $SCRCPY_ADD_ARGS

echo "Exiting scrcpy, cleaning up..."

sleep .25

# modprobe -r v4l2loopback
modprobe -r v4l2loopback 2>/dev/null || rmmod -f v4l2loopback
