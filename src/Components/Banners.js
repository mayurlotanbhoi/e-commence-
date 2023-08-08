import React from "react";

const Banners = ({ banner }) => {
  return (
    <div className=" d-flex justify-content-center ">
      {banner.map((items) => {
        return (
          <img src={`${items.image}`} alt="Image" className="banner m-2 "></img>
        );
      })}
    </div>
  );
};

export default Banners;
