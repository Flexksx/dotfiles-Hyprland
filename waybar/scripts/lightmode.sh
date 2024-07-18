#!/bin/bash

DIR='/home/flexksx/dotfiles-Hyprland/backrgrounds/light'
BG=$(find "$DIR" -type f \( -iname "*.jpg" -o -iname "*.png" -o -iname "*.gif" \) | shuf -n 1)
swww img $BG --transition-duration 1.2 --transition-step 255 --transition-type outer --transition-pos 0,0 
gsettings set org.gnome.desktop.interface color-scheme 'prefer-light'
wal -i $BG -l --saturate 0.4 

STYLE_PATH='/home/flexksx/dotfiles-Hyprland/waybar/style.css'
content=$(cat "$STYLE_PATH")
echo "$content" | tee "$STYLE_PATH" > /dev/null
echo "Copied light mode style to waybar/style.css"