import React from "react";
import Banner from "./Banners";
// import { Banners1, BannerCards } from "./BannerDB";
const BannerCard = ({ banner }) => {
  return (
    <div className=" card    ">
      <h2 className=" ms-sm-0 mt-3" style={{ fontSize: "1.5rem" }}>
        Featured Brands
      </h2>
      <div className="home-product d-flex">
        {banner.map((item) => {
          return (
            <img
              src={`${item.image}`}
              alt="banner"
              className=" banner-card-img mb-2 "
            />
          );
        })}
      </div>
    </div>
  );
};

export default BannerCard;
