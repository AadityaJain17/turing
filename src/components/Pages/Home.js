import React from "react";
import CustomCarousel from "../Carousel";
import UserCard from '../UserCard';

export const Home = () => {
  return (
    <div>
      <div>
        <h1>WELCOME TO TURING CLUB</h1>
        <br />
        <h6 style={{color:'white',alignItems:'justify'}}>
          The Real Techno-learning Club of NMIMS,Indore <br />
          It is renowned for fostering a culture of 
          innovation, learning, and technical excellence among our student community.</h6>
          </div>

      <div style={{width:"30%", alignItems: "center", margin:"auto"}}>
        <br />
      <CustomCarousel/>
         <br />
      </div>

      <div>
      <UserCard 
      description=" The Turing Club is dedicated to unearthing the hidden talents 
      of our students in the field of Information Technology. Our primary mission is to enhance the 
      technical skill set of our members by fostering collaborations with leading software industries. 
      Through these partnerships, we aim to provide students with valuable real-world experience and exposure 
      to industry experts. Moreover, our club is committed to molding students into industry-ready professionals 
      by organizing a range of technical activities, including hackathons, coding competitions, and informative seminars.
       These activities simulate the challenges of the IT industry and equip our members with the expertise and confidence 
       needed to excel in their future careers."
      />
      </div>

      
    </div>
  );
};