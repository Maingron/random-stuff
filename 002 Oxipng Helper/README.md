# 002 Oxipng Helper

## Requirements
- [Oxipng](https://github.com/oxipng/oxipng) has to be installed (Simplest method is by running `winget install Shssoichiro.Oxipng`)
- Add Oxipng to your system PATH if it is not already


## Installation
1. Copy the .cmd files to a folder that is in your system PATH. I use `C:\run`. (If you don't have such a folder, create one and add it to your PATH environment variable.)
2. Restart CMD
3. Profit

## Usage
- Run `oxipng-[preset] [file]` and your file will be optimized. I do this by opening cmd in the folder, then I usually run `oxipng-[preset] . -r` which will target all PNGs in the folder and all subfolders.

Of course you can also add other flags like `--fast` or just run `oxipng` itself and build your processing settings yourself.
Note: `--fast` flag is sometimes already included in presets, just like other flags.  

## Presets
- `oxipng-ghost` - Does not strip invisible alpha channel, fastest preset. If you want to wonder if you even ran oxipng at all, use this preset.
- `oxipng-xxfast` - Extremely fast, low compression. Best if you quickly need a file
- `oxipng-xfast` - Very fast, low compression
- `oxipng-fast` - Fast, medium compression
- `oxipng-max` - Best compression
- `oxipng-xmax` - Extremely slow, brute forcing. Usually you DO NOT want to use this preset.

## Noteworthy
While oxipng is generally lossless, meaning you don't lose any image data at all, it can strip some metadata and invisible data in alpha channels. The scripts in this repo do NOT strip metadata but usually strip invisible alpha channels, unless otherwise specified.  
It's also important to keep in mind that the optimization changes the checksum of the file, although I never ran into any issue with this.

**Some flags you might want to keep in mind:**
- `-r` - Recursive, process all PNGs in current folder & subfolders (e.g. `oxipng-xxfast . -r`)

**This software comes with no warranty. Always BACKUP your files before processing them.**
