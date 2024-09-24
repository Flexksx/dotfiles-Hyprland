import Battery from "./battery/battery.js";
import { Temperature, temp } from "./cpu/temperature.js";
import { cpuProgress } from "./cpu/usage.js";
const SystemInfo = () => {
    console.log(temp.is_polling);

    return Widget.Box({
        hpack: "end",
        spacing: 8,
        children: [
            Battery(),
            Temperature(),
            cpuProgress(),
        ],
    })
};

export default SystemInfo;