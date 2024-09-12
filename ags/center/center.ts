import { Workspaces } from "./workspaces/workspaces.js";   

export function Center() {
    return Widget.Box({
        class_name: "center",
        children: [
            Workspaces(),
        ],
    })
}