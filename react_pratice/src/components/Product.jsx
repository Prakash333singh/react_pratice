import React from "react";

function Product({ title, price, category, imgUrl }) {
    return (
        <div className=" w-96  rounded-md mt-10">
            <img src={imgUrl} className=" w-80  object-cover object-center " />
            <div className="text-gray-600 text-xs">{category}</div>
            <div className="font-bold">{title}</div>
            <div className="text-gray-500">${price}</div>
        </div>
    )
}

export default Product;