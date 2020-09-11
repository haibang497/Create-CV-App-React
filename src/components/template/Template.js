import React from "react";

import "./Template.scss";
import { Header } from "../header/index";
import SimpleSlider from "../slider/Slider";

export const Template = ({ setForm, formData, navigation }) => {
  const { template } = formData;

  const { next } = navigation;

  return (
    <>
      <Header next={next} />

      {/* <div className="choose-template">
        <div className="pagination">
          <div className="template">
            <a href="">Choose Template</a>
          </div>
          <div>
            <a>Your Design</a>
          </div>
          <div>
            <a>CV</a>
          </div>
        </div>
      </div>

      <div>
        <div>
          <div className="top-templates">Top Templates</div>
          <SimpleSlider />
        </div>
      </div> */}
    </>
  );
};
