import presetIcons from "@unocss/preset-icons";
import presetUno from "@unocss/preset-uno";
export default {
  presets: [
    // https://github.com/MellowCo/unocss-preset-weapp
    // presetWeapp(),
    presetUno(),
    presetIcons(),
  ],
  shortcuts: [
    {
      "border-base": "border border-gray-500_10",
      center: "flex justify-center items-center",
      show: "opacity-100 whitespace-nowrap",
      hidden: "opacity-0 w-0 whitespace-nowrap ",
    },
  ],
  transformers: [],
};
