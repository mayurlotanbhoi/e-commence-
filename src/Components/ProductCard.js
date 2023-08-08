import React from "react";

const ProductCard = () => {
  let arr = [1, 2, 5, 6, 8, 1];
  return (
    <div className=" d-flex flex-wrap justify-content-around">
      {arr.map(() => {
        return (
          <div className=" text-start prod-card m-lg-2 position-relative overflow-hidden">
            <div class="product-card">
              <div class="product-image">
                <img
                  src="https://rukminim1.flixcart.com/image/612/612/xif0q/shoe/w/z/a/-original-imaghtdhywzugfxv.jpeg?q=70"
                  alt="Product Image"
                  lass="responsive-image"
                />
              </div>
              <div class="product-details ">
                <h2 class="product-title">Product Title</h2>
                <p class="product-name">Comapny Name </p>
                <p class="product-price">
                  &#8377;177 <span className="product-off">&#8377;200</span>{" "}
                  <span class="product-discount">177OFF </span>
                </p>
                <p className="product-title">SIze 1,2,3,4,5</p>

                {/* <button class="btn">Add to Cart</button> */}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProductCard;
