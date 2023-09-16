import React from "react";
import ContactForm from "../ContactForm";

export const Contact = () => {
  return (
    <div>
      <h1>Contact Us</h1>
      <div style={{ borderRadius:"20px",
                    margin:"auto",
                    paddingBottom:"20px",
                    paddingTop:"20px",
                    display: "flex", alignItems: "center",justifyContent:"center" , 
                    backgroundColor:"#eee", 
                    width:"50%"}}>
      <ContactForm />
      </div>
      
    </div>
  );
};
