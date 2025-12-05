import React from "react";
import { OurPromisesStyle } from "./Our-promises-style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLaptopCode, faMobile, faNetworkWired, faPeopleGroup, faRightFromBracket, faShieldHalved } from "@fortawesome/free-solid-svg-icons";

const promises = [
  { icon: faLaptopCode, color: "rgb(68,178,179)", title: "Top Code Quality", text: "W3C compliant markup without compromise on quality." },
  { icon: faMobile, color: "rgb(239,175,75)", title: "Responsive", text: "Timely responsiveness and adaptability to serve you better." },
  { icon: faPeopleGroup, color: "rgb(0,189,235)", title: "Rockstar Team", text: "All-star team of experienced professionals with exceptional skills." },
  { icon: faRightFromBracket, color: "rgb(134,74,249)", title: "Fast Turn-arounds", text: "Swift delivery of high-quality code within your timeframe." },
  { icon: faNetworkWired, color: "rgb(252,41,71)", title: "Life-time support", text: "Enduring support for any future bugs or assistance needed." },
  { icon: faShieldHalved, color: "rgb(50,199,102)", title: "Secured Agreement", text: "Your creative work is yours with NDA commitment." }
];

const OurPromisesComponent = () => {
  return React.createElement(OurPromisesStyle, null,
    React.createElement("div", { className: "paras" },
      React.createElement("h1", null, "Our Promise"),
      React.createElement("p", null, "As part of our high quality service, we'd like to offer something extra too.")
    ),
    React.createElement("div", { className: "parent" },
      promises.map((promise, index) =>
        React.createElement("div", { key: index, className: "child", style: { borderTop: `4px solid ${promise.color}` } },
          React.createElement("div", { className: "title__parent" },
            React.createElement(FontAwesomeIcon, { icon: promise.icon, color: promise.color, fontSize: "30px" }),
            React.createElement("h1", { className: "title" }, promise.title)
          ),
          React.createElement("div", { className: "para" }, promise.text)
        )
      )
    )
  );
};

export default OurPromisesComponent;