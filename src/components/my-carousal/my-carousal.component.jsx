import React from "react";
import Slide2 from "../../assets/img/carousal/slide2.webp";

import "./my-carousal.styles.css";

const MyCarousal = () => {
  return (
    <div id="home">
      <img
        className="d-block w-100 custom-img"
        src={Slide2}
        alt="First slide"
      />
    </div>
  );
};

export default MyCarousal;
