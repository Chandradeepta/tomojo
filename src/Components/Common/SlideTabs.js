import React from "react";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { appleTabsStylesHook } from "@mui-treasury/styles/tabs";

const SlideTabs = () => {
  const [tabIndex, setTabIndex] = React.useState(0);
  const tabsStyles = appleTabsStylesHook.useTabs();
  const tabItemStyles = appleTabsStylesHook.useTabItem();
  return (
    <Tabs
      classes={tabsStyles}
      value={tabIndex}
      onChange={(e, index) => setTabIndex(index)}
    >
      <Tab classes={tabItemStyles} disableRipple label={"School tests"} />
      <Tab classes={tabItemStyles} disableRipple label={"Competitive test"} />
    </Tabs>
  );
};
export default SlideTabs;