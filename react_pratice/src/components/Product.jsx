import React from "react";

function Product({ title, price, category, imgUrl }) {
    return (
        <div className=" rounded-md mt-10 w-80">
            <img src={imgUrl} className=" w-80  object-cover object-center " />
            <div className="text-gray-600 text-sm pt-2 text-center">{category}</div>
            <div className=" text-gray-800 text-xl text-center font-semibold">{title}</div>
            <div className="text-gray-700 text-sm text-center">${price}</div>
        </div>
    )
}

export default Product;