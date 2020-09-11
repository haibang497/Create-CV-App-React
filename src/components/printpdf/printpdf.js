import React, { useRef } from "react";
import { useReactToPrint } from "react-to-print";

import "./printpdf.scss";
import ToggleCV from "../cv/chooseCV";
import "font-awesome/css/font-awesome.min.css";

class ComponentToPrint extends React.Component {
  render() {
    return <ToggleCV />;
  }
}

const Example = () => {
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  return (
    <div className="printCV">
      <ComponentToPrint ref={componentRef} />
      <button className="print" onClick={handlePrint}>
        <i className="fa fa-print"></i> &nbsp;
        Print this CV
      </button>
    </div>
  );
};

export default Example;
