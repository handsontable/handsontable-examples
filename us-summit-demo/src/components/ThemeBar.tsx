import { Dispatch, SetStateAction } from "react";
import Switch from "./Switch";

type Props = {
  theme: string;
  setTheme: Dispatch<SetStateAction<string>>;
};

const ThemeBar = ({ theme, setTheme }: Props) => (
  <div className="theme-bar">
    <Switch
      name="theme"
      items={[
        { id: "main-light", value: "ht-theme-main", label: "Main light" },
        {
          id: "horizon-light",
          value: "ht-theme-horizon",
          label: "Horizon light",
        },
        {
          id: "nostalgia-light",
          value: "ht-theme-nostalgia",
          label: "Nostalgia light",
        },
        {
          id: "tablebase-light",
          value: "ht-theme-tablebase",
          label: "Tablebase light",
        },
      ]}
      selectedValue={theme}
      onChange={(e) => {
        setTheme(e.target.value);
      }}
    />
    <Switch
      name="theme"
      items={[
        {
          id: "main-dark",
          value: "ht-theme-main-dark",
          label: "Main dark",
        },
        {
          id: "horizon-dark",
          value: "ht-theme-horizon-dark",
          label: "Horizon dark",
        },
        {
          id: "nostalgia-dark",
          value: "ht-theme-nostalgia-dark",
          label: "Nostalgia dark",
        },
        {
          id: "tablebase-dark",
          value: "ht-theme-tablebase-dark",
          label: "Tablebase dark",
        },
      ]}
      selectedValue={theme}
      onChange={(e) => {
        setTheme(e.target.value);
      }}
    />
  </div>
);

export default ThemeBar;
