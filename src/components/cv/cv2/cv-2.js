import React, { useContext } from "react";
import { SQUARE } from "../../../assets/images/index";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope, faHome } from "@fortawesome/free-solid-svg-icons";
import { Image } from "react-bootstrap";
import Table from "react-bootstrap/Table";

import "./cv-2.scss";
import { Text } from "../../../contexts/Languages";
import { FontContext } from "../../../contexts/FontFamily";
import colorContext from "../../../contexts/colorContext";
import fontSizeContext from "../../../contexts/fontSizeContext";

export const CV2 = () => {
  const { selectedColor } = useContext(colorContext);
  const { currentFont } = useContext(fontSizeContext);
  const fContext = useContext(FontContext);
  
  return (
    <>
      <div className="ZoneShowCVTemplate" style={fContext}>
        <div className="container">
          <div className="col-xs-12 decoration">
            <Image src="https://static.careerbuilder.vn/themes/cv_tool/images/template-11-blueblack-top.png" />
          </div>
          <div className="flexcol">
            <div className="left-col" style={{ background: selectedColor.color }}>
              <div className="top">
                <div className="avatar">
                  <img
                    src="https://static.careerbuilder.vn/themes/cv_tool/images/avatar.jpg"
                    alt="cv-2"
                  ></img>
                </div>
              </div>
              <div className="left-col-content">
                <h3 className="content-contact">CONTACT</h3>
                <ul className="contact">
                  <li>
                    <span className="icon">
                      <FontAwesomeIcon icon={faPhone} style={{ color: selectedColor.color }} />
                    </span>
                    <span className="value">{Text("CV2.leftcol.phone")}</span>
                  </li>
                  <li>
                    <span className="icon">
                      <FontAwesomeIcon icon={faEnvelope} style={{ color: selectedColor.color }} />
                    </span>
                    <span className="value" style={{ fontSize: currentFont.fontSize }}>Example@gmail.com</span>
                  </li>
                  <li>
                    <span className="icon">
                      <FontAwesomeIcon icon={faHome} style={{ color: selectedColor.color }} />
                    </span>
                    <span className="value" style={{ fontSize: currentFont.fontSize }}>{Text("CV2.leftcol.address")}</span>
                  </li>
                </ul>
                <h3>{Text("CV2.leftcol.skill")}</h3>
                <ul className="skill">
                  <li>
                    <label style={{ fontSize: currentFont.fontSize }}>{Text("CV2.leftcol.skill-1")}</label>
                    <Image src={SQUARE} />
                    <Image src={SQUARE} />
                    <Image src={SQUARE} />
                    <Image src={SQUARE} />
                    <Image src={SQUARE} />
                  </li>
                  <li>
                    <label style={{ fontSize: currentFont.fontSize }}>{Text("CV2.leftcol.skill-2")}</label>
                    <Image src={SQUARE} />
                    <Image src={SQUARE} />
                    <Image src={SQUARE} />
                    <Image src={SQUARE} />
                    <Image src={SQUARE} />
                  </li>
                  <li>
                    <label style={{ fontSize: currentFont.fontSize }}>{Text("CV2.leftcol.skill-3")}</label>
                    <Image src={SQUARE} />
                    <Image src={SQUARE} />
                    <Image src={SQUARE} />
                    <Image src={SQUARE} />
                    <Image src={SQUARE} />
                  </li>
                  <li>
                    <label style={{ fontSize: currentFont.fontSize }}>{Text("CV2.leftcol.skill-4")}</label>
                    <Image src={SQUARE} />
                    <Image src={SQUARE} />
                    <Image src={SQUARE} />
                    <Image src={SQUARE} />
                    <Image src={SQUARE} />
                  </li>
                  <li>
                    <label style={{ fontSize: currentFont.fontSize }}>{Text("CV2.leftcol.skill-5")}</label>
                    <Image src={SQUARE} />
                    <Image src={SQUARE} />
                    <Image src={SQUARE} />
                    <Image src={SQUARE} />
                    <Image src={SQUARE} />
                  </li>
                </ul>
                <h3>{Text("CV2.leftcol.lang")}</h3>
                <ul className="languages">
                  <li>
                    <label style={{ fontSize: currentFont.fontSize }}>{Text("CV2.leftcol.lang-1")}</label>
                  </li>
                  <li>
                    <label style={{ fontSize: currentFont.fontSize }}>{Text("CV2.leftcol.lang-2")}</label>
                  </li>
                </ul>
              </div>
            </div>

            <div className="right-col">
              <div className="name col-xs-12">
                <h2 style={{ color: selectedColor.color }}>Tran Van A</h2>
                <h4 style={{ color: selectedColor.color }}>{Text("CV2.rightcol.title")}</h4>
                <div className="introduction">
                  <div className="content-r" style={{ fontSize: currentFont.fontSize }}>
                    {Text("CV2.rightcol.objective")}
                  </div>
                </div>
              </div>
              <div className="content">
                <h3>{Text("CV2.rightcol.information")}</h3>
                <Table borderless="true" size="sm">
                  <tbody>
                    <tr>
                      <td>
                        <label style={{ fontSize: currentFont.fontSize }}>{Text("CV2.rightcol.birthday")}</label>
                      </td>
                      <td style={{ fontSize: currentFont.fontSize }}>: MM/DD/YYYY</td>
                    </tr>
                    <tr>
                      <td>
                        <label style={{ fontSize: currentFont.fontSize }}>{Text("CV2.rightcol.status")}</label>
                      </td>
                      <td style={{ fontSize: currentFont.fontSize }}>: {Text("CV2.rightcol.single")}</td>
                    </tr>
                    <tr>
                      <td>
                        <label style={{ fontSize: currentFont.fontSize }}>{Text("CV2.rightcol.nationality")}</label>
                      </td>
                      <td style={{ fontSize: currentFont.fontSize }}> : {Text("CV2.rightcol.vietnamese")}</td>
                    </tr>
                    <tr>
                      <td>
                        <label style={{ fontSize: currentFont.fontSize }}>{Text("CV2.rightcol.location")}</label>
                      </td>
                      <td style={{ fontSize: currentFont.fontSize }}> : {Text("CV2.rightcol.vietnam")}</td>
                    </tr>
                  </tbody>
                </Table>
                <h3>{Text("CV2.rightcol.experience")}</h3>
                {/* New Experience */}
                <div className="content-title">
                  <strong style={{ fontSize: currentFont.fontSize }}>{Text("CV2.rightcol.job-title")}</strong>
                  <br></br>
                  <strong style={{ fontSize: currentFont.fontSize }}>06/2017 - 06/2018</strong>
                </div>

                <div className="content-r">
                  <p style={{ fontSize: currentFont.fontSize }}>{Text("CV2.rightcol.job-description.achivement")}</p>
                  <ul className="achievements">
                    <li style={{ fontSize: currentFont.fontSize }}>{Text("CV2.rightcol.job-description.li-1")}</li>
                    <li style={{ fontSize: currentFont.fontSize }}>{Text("CV2.rightcol.job-description.li-2")}</li>
                  </ul>

                  <p style={{ fontSize: currentFont.fontSize }}>{Text("CV2.rightcol.job-description.gained")}</p>
                  <ul>
                    <li style={{ fontSize: currentFont.fontSize }}>{Text("CV2.rightcol.job-description.gained-1")}</li>
                  </ul>
                </div>
                {/* End Experience */}

                {/* New Experience */}
                <div className="content-title">
                  <strong style={{ fontSize: currentFont.fontSize }}>{Text("CV2.rightcol.job-title")}</strong>
                  <br></br>
                  <strong style={{ fontSize: currentFont.fontSize }}>06/2017 - 06/2018</strong>
                </div>

                <div className="content-r">
                  <p style={{ fontSize: currentFont.fontSize }}>{Text("CV2.rightcol.job-description.achivement")}</p>
                  <ul className="achievements">
                    <li style={{ fontSize: currentFont.fontSize }}>{Text("CV2.rightcol.job-description.li-1")}</li>
                    <li style={{ fontSize: currentFont.fontSize }}>{Text("CV2.rightcol.job-description.li-2")}</li>
                  </ul>

                  <p style={{ fontSize: currentFont.fontSize }}>{Text("CV2.rightcol.job-description.gained")}</p>
                  <ul>
                    <li style={{ fontSize: currentFont.fontSize }}>{Text("CV2.rightcol.job-description.gained-1")}</li>
                  </ul>
                </div>
                {/* End Experience */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
