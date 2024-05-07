import React, { useState } from "react";
import { Combobox } from "@consta/uikit/Combobox";
import { Theme, presetGpnDefault } from "@consta/uikit/Theme";

type Item = {
  label: string;
  id: number;
};

const items: Item[] = [
  {
    label: "Первый",
    id: 1,
  },
  {
    label: "Второй",
    id: 2,
  },
  {
    label: "Третий",
    id: 3,
  },
];

const MainComponent = (props) => {
  const { cfg, subspace, dp } = props;
  const [value, setValue] = useState<Item | null>();
  return (
    <Theme className="App" preset={presetGpnDefault}>
      <Combobox
        items={items}
        value={value}
        onChange={setValue}
        placeholder="Выберите нужный элемент из списка"
      />
    </Theme>
  );
};

export default MainComponent;
