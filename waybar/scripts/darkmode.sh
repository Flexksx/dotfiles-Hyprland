#!/bin/bash
DIR='/home/flexksx/dotfiles-Hyprland/backrgrounds/dark'
BG=$(find "$DIR" -type f \( -iname "*.jpg" -o -iname "*.png" -o -iname "*.gif" \) | shuf -n 1)
swww img --transition-type wipe --transition-angle 30 --transition-step 90 $BG
gsettings set org.gnome.desktop.interface color-scheme 'prefer-dark'
wal -i $BG --saturate 0.4 --cols16 darken

STYLE_PATH='/home/flexksx/dotfiles-Hyprland/waybar/style.css'
content=$(cat "$STYLE_PATH")
echo "$content" | tee "$STYLE_PATH" > /dev/null
echo "Copied light mode style to waybar/style.css"
