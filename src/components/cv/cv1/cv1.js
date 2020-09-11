import React, { useContext } from "react";

import "./cv1.scss";
import "font-awesome/css/font-awesome.min.css";
import colorContext from "../../../contexts/colorContext";
import fontSizeContext from "../../../contexts/fontSizeContext";
import { Text } from "../../../contexts/Languages";
import { FontContext } from "../../../contexts/FontFamily";

export const CV1 = () => {
  const { selectedColor } = useContext(colorContext);
  const { currentFont } = useContext(fontSizeContext);
  const fContext = useContext(FontContext);
  return (
    <>
      <div className="cv">
        <div className="cv1" style={fContext}>
          <div
            className="header"
            style={{ background: selectedColor.background }}
          >
            <div className="row">
              <div className="col-md-4 logo">
                <img
                  src="https://static.careerbuilder.vn/themes/cv_tool/images/avatar.jpg"
                  width="122px"
                  height="122px"
                  alt="logo"
                />
              </div>
              <div className="col-md-8 name">
                <h2>
                  <b>Nguyen Van A</b>
                </h2>
                <h4>
                  <b>{Text("CV1.rightcol.title")}</b>
                </h4>
              </div>
            </div>
          </div>
          <div className="main" style={{ fontSize: currentFont.fontSize }}>
            <div className="row">
              <div className="col-md-6 one">
                <h3 style={{ color: selectedColor.color }}>
                  <i className="fa fa-user"></i> &nbsp; CONTACT
                </h3>
                <div className="row">
                  <div className="col-md-6 one-infor">
                    <p style={{ fontSize: currentFont.fontSize }}>
                      {Text("CV1.leftcol.birthday")}
                    </p>
                    <p style={{ fontSize: currentFont.fontSize }}>
                      {Text("CV1.leftcol.status")}
                    </p>
                    <p style={{ fontSize: currentFont.fontSize }}>
                      {Text("CV1.leftcol.nationality")}
                    </p>
                    <p style={{ fontSize: currentFont.fontSize }}>
                      {Text("CV1.leftcol.location")}
                    </p>
                    <hr />
                    <p style={{ fontSize: currentFont.fontSize }}>
                      {Text("CV1.leftcol.phone")}
                    </p>
                    <p style={{ fontSize: currentFont.fontSize }}>Email</p>
                    <p style={{ fontSize: currentFont.fontSize }}>
                      {Text("CV1.leftcol.address")}
                    </p>
                  </div>
                  <div className="col-md-6 one-infor">
                    <p style={{ fontSize: currentFont.fontSize }}>: DD/MM/YY</p>
                    <p style={{ fontSize: currentFont.fontSize }}>
                      : {Text("CV1.leftcol.single")}
                    </p>
                    <p style={{ fontSize: currentFont.fontSize }}>
                      : {Text("CV1.leftcol.vietnamese")}
                    </p>
                    <p style={{ fontSize: currentFont.fontSize }}>
                      : {Text("CV1.leftcol.vietnam")}
                    </p>
                    <hr />
                    <p style={{ fontSize: currentFont.fontSize }}>
                      : {Text("CV1.leftcol.phone")}
                    </p>
                    <p style={{ fontSize: currentFont.fontSize }}>: Email</p>
                    <p style={{ fontSize: currentFont.fontSize }}>
                      : {Text("CV1.leftcol.address")}
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 two">
                <h3 style={{ color: selectedColor.color }}>
                  <i class="fa fa-tencent-weibo"></i> &nbsp;OBJECTIVES
                </h3>
                <p style={{ fontSize: currentFont.fontSize }}>
                  {Text("CV1.rightcol.objective")}
                </p>
                <h3 style={{ color: selectedColor.color }}>
                  <i className="fa fa-language"></i> &nbsp;
                  {Text("CV1.rightcol.lang")}
                </h3>
                <p style={{ fontSize: currentFont.fontSize }}>
                  {Text("CV1.rightcol.lang-1")}
                </p>
                <p style={{ fontSize: currentFont.fontSize }}>
                  {Text("CV1.rightcol.lang-2")}
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-12 three">
                <h3 style={{ color: selectedColor.color }}>
                  <i className="fa fa-gear"></i> &nbsp;
                  {Text("CV1.leftcol.skill")}
                </h3>
                <ul className="skill">
                  <li>
                    <label style={{ fontSize: currentFont.fontSize }}>
                      {Text("CV1.leftcol.skill-1")}
                    </label>
                    <i style={{ color: selectedColor.color }} className="fa fa-star"></i>
                    <i style={{ color: selectedColor.color }} className="fa fa-star"></i>
                    <i style={{ color: selectedColor.color }} className="fa fa-star"></i>
                    <i style={{ color: selectedColor.color }} className="fa fa-star"></i>
                    <i style={{ color: selectedColor.color }} className="fa fa-star"></i>
                  </li>
                  <br />
                  <li>
                    <label style={{ fontSize: currentFont.fontSize }}>
                      {Text("CV1.leftcol.skill-2")}
                    </label>
                    <i style={{ color: selectedColor.color }} className="fa fa-star"></i>
                    <i style={{ color: selectedColor.color }} className="fa fa-star"></i>
                    <i style={{ color: selectedColor.color }} className="fa fa-star"></i>
                    <i style={{ color: selectedColor.color }} className="fa fa-star"></i>
                    <i style={{ color: selectedColor.color }} className="fa fa-star"></i>
                  </li>
                </ul>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-12 four">
                <h3 style={{ color: selectedColor.color }}>
                  <i className="fa fa-suitcase"></i> &nbsp;
                  {Text("CV1.rightcol.experience")}
                </h3>
                <div className="title-one"> {Text("CV1.rightcol.title")}</div>
                <div className="content-paragraph">
                  <p style={{ fontSize: currentFont.fontSize }}>
                    06.2017-07.2018: <b>{Text("CV1.rightcol.job-title")}</b>
                  </p>
                  <p style={{ fontSize: currentFont.fontSize }}>
                    {Text("CV1.rightcol.job-description.achivement")}:
                  </p>
                  <p style={{ fontSize: currentFont.fontSize }}>
                    {Text("CV1.rightcol.job-description.li-1")}
                  </p>
                  <p style={{ fontSize: currentFont.fontSize }}>
                    {Text("CV1.rightcol.job-description.li-2")}
                  </p>
                  <p style={{ fontSize: currentFont.fontSize }}>
                    {Text("CV1.rightcol.job-description.gained")}
                  </p>
                  <p style={{ fontSize: currentFont.fontSize }}>
                    {Text("CV1.rightcol.job-description.gained-1")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
