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

const OurPromisesComponent = () => (
  <OurPromisesStyle>
    <div className="paras">
      <h1>Our Promise</h1>
      <p>As part of our high quality service, we'd like to offer something extra too.</p>
    </div>
    <div className="parent">
      {promises.map((promise, index) => (
        <div key={index} className="child" style={{ borderTop: `4px solid ${promise.color}` }}>
          <div className="title__parent">
            <FontAwesomeIcon icon={promise.icon} color={promise.color} fontSize="30px" />
            <h1 className="title">{promise.title}</h1>
          </div>
          <div className="para">{promise.text}</div>
        </div>
      ))}
    </div>
  </OurPromisesStyle>
);

export default OurPromisesComponent;