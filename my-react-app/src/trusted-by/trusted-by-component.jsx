import React from "react";
import { OurPromisesStyle } from "./our-promises-style.js";

const OurPromisesComponent = () => {
  return (
    <OurPromisesStyle>
      <h1>Our Promises</h1>
      <p className="promise-sub">
        As part of our high-quality service, we’d like to offer something extra too.
      </p>

      <div className="parent">
        <div className="child">
          <div className="title">Top Code Quality</div>
          <div className="desc">Clean, structured, and professional code.</div>
        </div>

        <div className="child">
          <div className="title">Responsive</div>
          <div className="desc">Designs adapt smoothly on all devices.</div>
        </div>

        <div className="child">
          <div className="title">Fast Turnaround</div>
          <div className="desc">Projects completed quickly without compromise.</div>
        </div>

        <div className="child">
          <div className="title">Trusted Team</div>
          <div className="desc">Reliable and professional team results.</div>
        </div>

        <div className="child">
          <div className="title">Lifetime Support</div>
          <div className="desc">Continuous help after delivery.</div>
        </div>

        <div className="child">
          <div className="title">Secure & Confidential</div>
          <div className="desc">Your data is safe and protected.</div>
        </div>
      </div>
    </OurPromisesStyle>
  );
};

export default OurPromisesComponent;
