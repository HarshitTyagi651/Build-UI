import React from "react";
import im2 from '../../Assets/Images/im2.jpg';
import im3 from '../../Assets/Images/im3.jpg';
import im4 from '../../Assets/Images/im4.jpg';
import im5 from '../../Assets/Images/im5.jpg';
import im6 from '../../Assets/Images/im6.jpg';
import Card from '../../Components/Card2/Card';
import "./OurTeam.css";

const OurTeam = () => {
  const cards = [
    {
      name: "Harshit Tyagi",
      designation: "Founder",
      description: "He is the person who thought an idea about the build ui",
      img: im6,
    },
    {
      name: "Harshit Tyagi",
      designation: "Founder",
      description: "He is the person who thought an idea about the build ui",
      img: im2,
    },
    {
      name: "Harshit Tyagi",
      designation: "Founder",
      description: "He is the person who thought an idea about the build ui",
      img: im3,
    },
    {
      name: "Harshit Tyagi",
      designation: "Founder",
      description: "He is the person who thought an idea about the build ui",
      img: im4,
    },
    {
      name: "Harshit Tyagi",
      designation: "Founder",
      description: "He is the person who thought an idea about the build ui",
      img: im5,
    },
  ];

  return (
    <div className="ourteam">
      <h1>Meet our <span>honourable</span> team members</h1>
      <div className="ourteam-container">
          {
            cards.map((item, i) => {
              return (
                <Card name={item.name} desc={item.description} desig={item.designation} img={item.img}/>
              )
            })
          }
      </div>
    </div>
  );
};

export default OurTeam;
