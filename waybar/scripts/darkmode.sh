#!/bin/bash
DIR='/home/flexksx/dotfiles-Hyprland/backrgrounds/dark'
BG=$(find "$DIR" -type f \( -iname "*.jpg" -o -iname "*.png" -o -iname "*.gif" \) | shuf -n 1)
swww img $BG --transition-duration 1.2 --transition-step 255 --transition-type outer --transition-pos 0,0 
gsettings set org.gnome.desktop.interface color-scheme 'prefer-dark' 
wal -i $BG --saturate 0.4 

STYLE_PATH = '/home/flexksx/dotfiles-Hyprland/waybar/style.css'
touch "$STYLE_PATH"