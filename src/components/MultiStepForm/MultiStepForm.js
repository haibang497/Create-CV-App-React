import React, { useState } from "react";

import { Template } from "../template/Template";
import { Design } from "../design/Design";
import { Review } from "../review/Review";

const steps = [
  { id: "template" }, 
  { id: "design" }, 
  { id: "review" }
];

const defaultData = {
  template: "cv_1",
  cover: true,
  language: "en",
  font_family: "Roboto",
  font_weight: "14px",
};

export const MultiStepForm = () =>  {
    const [formData, setForm] = useState(defaultData);
    const [ step, navigation ] = useState({ initialStep: 0, id: steps[0].id });
    const { id } = step;

  const props = { formData, setForm, navigation };

  switch (id) {
    case "template":
      return <Template {...props} />;
    case "design":
      return <Design {...props} />;
    case "review":
      return <Review {...props} />;
    default:
      return null;
  }
};
