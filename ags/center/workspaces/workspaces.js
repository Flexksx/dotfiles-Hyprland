const hyprland = await Service.import("hyprland")

// function Workspaces() {
//     const activeId = hyprland.active.workspace.bind("id")
//     const workspaces = hyprland.bind("workspaces")
//         .as(ws => ws.map(({ id }) => Widget.Button({
//             on_clicked: () => hyprland.messageAsync(`dispatch workspace ${id}`),
//             child: Widget.Label(`${id}`),
//             class_name: activeId.as(i => `${i === id ? "focused" : ""}`),
//         })))

//     return workspaces
// }

const icons = {
    "org.telegram.desktop": "",
    "kitty": "",
    "kitty .*top.*": "",
    "kitty .*pacman.*": "",
    "com.github.weclaw1.ImageRoll|nomacs": "",
    "(.*[$%#] *)?nvim.*": "",
    "(.*[$%#] *)?([hb]|nv)top.*": "",
    "firefox": "",
    "discord": "",
    "Discord.*": "",
    ".[0-9]+. Discord.*": " °",
    "Signal": "󰍡",
    "(.* - )?(.[0-9]+. )?YouTube.*": "",
    ".* - Gmail .*": "󰊫",
    "obsidian": "󱞁",
    "ONLYOFFICE Desktop Editors": "󰈙",
    "calibre-.*": "",
    "org.qbittorrent.qBittorrent": "",
    "org.kde.kdeconnect.*": "",
    "mpv": "",
    "vlc": "󰕼",
    "Gimp-.*": "",
    "steam.*": "󰓓", //  for FontAwesome
    "steam Friends List": "",
    "steam_app_[0-9]+": "󰮂",
    "Winetricks.*": "󰡶",
    "lutris": "🦦",
    "Spotify": "",
    "jetbrains-idea(-ce)?": "",
    ".*youtube.*": "",
    "Code": "󰨞",
    "com.obsproject.Studio|zoom": "",
    "io.github.whoozle.android-file-transfer": "",
    "(Chromium|Chrome|chrome)": "",
    "(slack|Slack)": "󰒱",
    ".*rgb.*": ""
}

const getIcon = (/** @type {string} */ name) => {
    for (const [pattern, icon] of Object.entries(icons)) {
        if (new RegExp(pattern).test(name)) {
            return icon
        }
    }
    return ""
}

const getClientsInWorkspace = (/** @type {number} */ id) => {
    return hyprland.clients.filter(c => c.workspace.id === id);
}

const getIconsForWorkspace = (/** @type {number} */ id) => {
    const clients = getClientsInWorkspace(id)
    const names = clients.map(c => c.initialClass)
    const icons = names.map(getIcon)
    return icons.join(" ")
}

const getActiveWorkspace = () => {
    return hyprland.active.workspace.bind("id")
}


const getWorkspaces = () => {
    return hyprland.bind("workspaces")
}

const createWorkspaceButton = (/** @type {number} */ id) => {
    const className = getActiveWorkspace().as(i => `${i === id ? "focused" : ""}`)
    const icons = getIconsForWorkspace(id)
    const label = `${icons}`

    const workspaceIconsLabel = Widget.Label({ label: `${label}`, css: "font-size: 24px;" })
    const workspaceIdLabel = Widget.Label({ label: `${id}  `, css: "font-size: 14px;" })

    const workspaceLabel = Widget.Box({ children: [workspaceIdLabel, workspaceIconsLabel] })
    return Widget.Button({
        on_clicked: () => hyprland.messageAsync(`dispatch workspace ${id}`),
        child: workspaceLabel,
        class_name: className,
    })
}

const instantiateWorkspaceButtons = () => {
    return getWorkspaces().as(ws => ws.map(({ id }) => createWorkspaceButton(id)))
}

const Workspaces = () => {
    const workspaces = instantiateWorkspaceButtons()
    return Widget.Box({ children: workspaces })
}

// const dispatch = (arg: string | number) => hyprland.messageAsync(`dispatch workspace ${arg}`)
export default Workspaces;