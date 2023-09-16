import React from "react";
import SwipeableTextMobileStepper from "../Swipe";
import ActionAreaCard from "../Card";

export const Home = () => {
  return (
    <div>
      <div style={{width:"30%", alignItems: "center", margin:"auto"}}>
      <ActionAreaCard />
        <br></br>
      <SwipeableTextMobileStepper />
      </div>
      
    </div>
  );
};
