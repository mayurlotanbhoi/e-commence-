import React from "react";
import slider1 from "../Assets/images/slider1.jpg";

const HomeSlider = () => {
  return (
    <div
      id="carouselExampleInterval"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        <div className="carousel-item active" data-bs-interval="10000">
          <img src={slider1} className="d-block w-100" alt="..." />
        </div>
        <div className="carousel-item" data-bs-interval="2000">
          <img src={slider1} className="d-block w-100" alt="..." />

          <img
            src="https://png.pngtree.com/png-clipart/20230413/original/pngtree-summer-sun-ice-cream-beach-png-image_9049878.png"
            className=" position-absolute "
            style={{
              left: "39%",
              width: "18%",

              top: "-10%",
            }}
          />
        </div>
        <div className="carousel-item ">
          <img
            src={slider1}
            className="d-block w-100 position-relative"
            alt="..."
          />
          <img
            src="https://png.pngtree.com/png-clipart/20230413/original/pngtree-summer-sun-ice-cream-beach-png-image_9049878.png"
            className=" position-absolute "
            style={{
              left: "39%",
              width: "18%",
              top: "-10%",
            }}
          />
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleInterval"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleInterval"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default HomeSlider;
