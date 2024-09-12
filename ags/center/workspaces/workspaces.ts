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


// export default () => Widget.Box({
//     class_name: "workspaces",
//     children: [
//         Workspaces(),
//     ],
// }) 

const dispatch = (arg: string | number) => hyprland.messageAsync(`dispatch workspace ${arg}`)

