import React, { useState } from "react";
import { Combobox } from "@consta/uikit/Combobox";
import { Theme, presetGpnDefault } from "@consta/uikit/Theme";
import { Select } from '@consta/uikit/Select';

type Item = {
  label: string;
  id: number;
};

const items: Item[] = [
  {
    label: 'Первый',
    id: 1,
  },
  {
    label: 'Второй',
    id: 2,
  },
  {
    label: 'Третий',
    id: 3,
  },
];

const MainComponent = (props) => {
  const { cfg, subspace, dp } = props;
  const [value, setValue] = useState<Item | null>();
  return (
    <Theme className="App" preset={presetGpnDefault}>
      <Select items={items} value={value} onChange={setValue} />
      <Combobox
        placeholder="Выберите вариант"
        items={items}
        size="m"
        view="default"
        form="default"
        label="Combobox"
        labelPosition="top"
        caption="Пример"
        value={value}
        onChange={( value ) => setValue(value)}
      />
    </Theme>
  );
};

export default MainComponent;
