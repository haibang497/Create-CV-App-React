import React, { useState } from "react";

import SimpleSlider from "../slider/Slider";
import { Tabs, Tab } from "react-bootstrap";
import "./tab.scss";

export const ControlledTabs = () => {
  const [key, setKey] = useState("choose");
  return (
    <Tabs
      id="controlled-tab-example"
      activeKey={key}
      onSelect={(k) => setKey(k)}
    >
      <Tab eventKey="choose" title="1| Choose Template">
        <div className="title">
          <font>Top Templates</font>
        </div>
        <SimpleSlider />
        <div className="title">
          <font>Highlight CV Templates</font>
        </div>
      </Tab>
      <Tab eventKey="create" title="2| Your Design"></Tab>
      <Tab eventKey="cv" title="3| CV" ></Tab>
    </Tabs>
  );
};
