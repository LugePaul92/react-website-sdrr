import React, { useState } from "react";
import "./styles.css";
import Tabs from "./Components/Tabs";
// Tabs Components
import TabOne from "./Components/TabOne";
import TabTwo from "./Components/TabTwo";
import TabThree from "./Components/TabThree";

type TabsType = {
  label: string;
  index: number;
  Component: React.FC<{}>;
}[];

// Tabs Array
const tabs: TabsType = [
  {
    label: "Vijitabu",
    index: 1,
    Component: TabOne,
  },
  // {
  //   label: "Mahubiri",
  //   index: 2,
  //   Component: TabTwo,
  // },
];

export const TabComponent = () => {
  const [selectedTab, setSelectedTab] = useState<number>(tabs[0].index);

  return (
    <div className="App">
      <Tabs selectedTab={selectedTab} onClick={setSelectedTab} tabs={tabs} />
    </div>
  );
};
