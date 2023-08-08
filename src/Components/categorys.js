import React from "react";
import CategorysData from "./navBarCategory.js";

const Categorys = () => {
  return (
    <div className=" container category-container d-flex ">
      {CategorysData.map((item, index) => (
        <div key={index} className="hover-container ml-5 mt-2 text-center">
          <div className="text-center d-flex flex-column justify-content-end">
            <img src={`${item.image}`} width="80px" alt="Image" />

            <div className="hover-element ">{item.categoriesName}</div>
          </div>

          <ul className="list-container card ">
            <div>
              <div className="d-flex justify-content-around text-start">
                {/* <div>{item.categories}</div> */}
                {/* {console.log(item.categories)} */}
                {item.categories.map((element, id, arr) => {
                  return (
                    <div className="list">
                      <h6>{element.category}</h6>
                      {console.log(element.category)}
                      {element.products.map((elements) => (
                        <li className="category text-lowercase">
                          <a>{elements.name}</a>
                        </li>
                      ))}
                    </div>
                  );
                })}
              </div>
            </div>
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Categorys;
