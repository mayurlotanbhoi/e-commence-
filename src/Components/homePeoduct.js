import React from "react";
import "./compCss/comman.css";
import "../Globle/responsive.css";
import { Link } from "react-router-dom";
import { HomePruductFirsItem } from "./index";

const HomePeoduct = ({ Electronics, Fashion }) => {
  var arr = [1, 2, 5, 7, 8, 9, 4, , 1, 3, 6, 5];

  console.log(Electronics);

  return (
    <div className="home-product card mt-2 container-fluid">
      <HomePruductFirsItem category={Electronics.categorys} />
      {Electronics.Products.map((item, index) => {
        return (
          <Link
            to={"/Product/:" + `${item.name}`}
            className="home-prod-image text-center d-flex flex-column justify-content-end"
            style={{ textDecoration: "none", color: "black" }}
          >
            {/* <div className="home-prod-image text-center d-flex flex-column justify-content-end"> */}
            <figure className="image-zoom-container ">
              <img src={`${item.image}`} />
            </figure>
            <div className="home-pro-tilet">
              <p>{item.name}</p>
              <p>{item.price}</p>
              <p>{item.company}</p>
            </div>
            {/* </div> */}
          </Link>
        );
      })}
    </div>
  );
};

export default HomePeoduct;
