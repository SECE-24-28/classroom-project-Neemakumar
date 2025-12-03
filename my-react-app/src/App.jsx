//import "./App.css";
// import SemResult from "./components/SemResult";
// import ResultTable from "./components/ResultTable";
// import Flex from "./components/Flex";
//import HeroCapsule from "./components/leaders-tomorrow-component";

//function App() {
  //return (
    //<div>
      {/* <SemResult /> */}
      {/* <ResultTable /> */}
      {/* <Flex /> */}
      //<HeroCapsule />
    //</div>
  //);
//}

import React from "react";
import PositionComponent from "./positioning/position-component";  // ✔ correct import

function App() {
  return (
    <div>
      <PositionComponent />   {/* ✔ correct component usage */}
    </div>
  );
}

export default App;
