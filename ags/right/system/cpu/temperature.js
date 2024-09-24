import Variable from "resource:///com/github/Aylur/ags/variable.js";

const pollInterval = 1000;
const temperaturePath = "/sys/class/thermal/thermal_zone0/temp";

export const temp = Variable(0, {
    poll: [
        pollInterval,
        "cat " + temperaturePath, out =>
            Number.parseInt(out) / 1000,
    ],
});

temp.startPoll();




export const Temperature = () => {
    console.log(temp);
    return Widget.Box({
        class_name: "temperature",
        children: [
            Widget.Label({
                label: temp.getValue() + "°C",
            }),

        ],
    });
}
