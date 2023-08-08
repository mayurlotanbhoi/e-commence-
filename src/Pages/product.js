import React from "react";
import { ProductCard } from "../Components";

const Product = () => {
  return (
    <div className=" container-fluid " style={{ backgroundColor: "#f1f3f6" }}>
      <div className="row  ">
        <div className="col-2  card">fillter </div>
        <div className="  card" style={{ width: "82%", margin: "8px" }}>
          <ProductCard />
        </div>
      </div>
    </div>
  );
};

export default Product;
