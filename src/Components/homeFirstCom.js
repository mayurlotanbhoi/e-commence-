import React from "react";
import "./compCss/comman.css";

const HomeFirstCom = ({ category }) => {
  return (
    <div className="home-producr-first text-center align-items-center d-flex flex-column justify-content-end ">
      <div className="home-fist">
        <p>{category}</p>
        <button className="btn bg-primary">View More</button>
      </div>
      <img
        src="https://rukminim1.flixcart.com/fk-p-flap/278/278/image/7593e7b6640822c1.jpg?q=90"
        alt="Background"
      />
    </div>
  );
};

export default HomeFirstCom;
