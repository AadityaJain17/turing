import React from "react";
import SwipeableTextMobileStepper from "../Swipe";
import ActionAreaCard from "../Card";

export const Home = () => {
  return (
    <div>
      <div style={{alignContent:'center',justifyContent:'center', display:'flex'}}><ActionAreaCard /></div>
      
      <div style={{width:"30%", alignItems: "center", margin:"auto"}}>
      
        <br></br>
      <SwipeableTextMobileStepper />
      </div>
      
    </div>
  );
};