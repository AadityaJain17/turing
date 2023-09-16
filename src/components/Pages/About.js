import React from "react";
import PersonComponent from "../Person";
import ContactIcons from "../ContactIcons";

export const About = () => {
  
  return (
    <div>
      <h1>About</h1>
      <div style={{display: "flex", alignItems: "center", paddingBottom:"50px"}}>
        <PersonComponent/>
      </div>
      <div style={{ width:"17%", alignItems: "center", margin:"auto"}}>
        <ContactIcons/>
      </div>
    </div>
    
  );
};
