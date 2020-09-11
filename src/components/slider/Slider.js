import React from "react";
import Slider from "react-slick";

import "./style.scss";

const listCV = [
  {
    id: 1,
    imgUrl:
      "https://static.careerbuilder.vn/themes/cv_tool/images/template/template-11_1572428050.png",
  },
  {
    id: 2,
    imgUrl:
      "https://static.careerbuilder.vn/themes/cv_tool/images/template/template-5_1572428094.png",
  },
  {
    id: 3,
    imgUrl:
      "https://static.careerbuilder.vn/themes/cv_tool/images/template/1_1530703032.png",
  },
  {
    id: 4,
    imgUrl:
      "https://static.careerbuilder.vn/themes/cv_tool/images/template/template-14_1572428008.png",
  },
];

function SampleNextArrow(props) {
  const { className, onClick } = props;
  return <div className={className} onClick={onClick} />;
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return <div className={className} style={{ ...style }} onClick={onClick} />;
}

const SimpleSlider = ({ chooseTemplate }) => {
  var settings = {
    //Center Mode
    className: "center",
    centerMode: true,

    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,

    //GO to slide on click
    focusOnSelect: true,

    //Arrow buttons
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <div className="container">
      <Slider {...settings}>
        {listCV.map((item, index) => {
          return (
            <div className="CV-item" key={index}>
              <img src={item.imgUrl} alt="cv1" />
              <a
                className="select-template"
                href="#cv1"
                onClick={() => chooseTemplate(item.id)}
              >
                <div className="cv-info e1-horizontal">
                  <span className="radius3px usethis">Select template</span>
                </div>
              </a>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};
export default SimpleSlider;
