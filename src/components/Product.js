import React from "react";
import { NavLink } from "react-router-dom";
import FormatPrice from "../Helpers/FormatPrice";

const Product = (curElem) => {
  const { id, name, image, price, category } = curElem;
  return (
    <NavLink to={`/singleproduct/${id}`}>
      <div className="card rounded-xl bg-white">
        <figure className="group flex items-center justify-center  relative overflow-hidden transition-all figure-after">
          <img
            src={image}
            alt={name}
            className="max-w-[90%] mt-6 transition-all duration-300 group-hover:scale-125"
          />
          <figcaption className="image-category">{category}</figcaption>
        </figure>

        <div className="card-data px-8 ">
          <div className="card-data-flex flex justify-between items-center my-8">
            <h3 className="text-3xl">{name}</h3>
            <p className="card-data--price text-blue-600 text-3xl">
              {<FormatPrice price={price} />}
            </p>
          </div>
        </div>
      </div>
    </NavLink>
  );
};

export default Product;
