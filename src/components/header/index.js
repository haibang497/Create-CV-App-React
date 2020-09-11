import React from "react";
import { Image } from "react-bootstrap";

import { CV_HAY } from "../../assets/images/index";
import "./header.scss";

export const Header = (props) => {
  return (
    <div className="header ">
      <div className="header__content">
        <Image src={CV_HAY} />
      </div>
      <div className="header__buttons">
        {/* <button onClick={props}>Next</button> */}
      </div>
    </div>
  );
};
