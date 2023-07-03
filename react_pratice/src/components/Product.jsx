import React from "react";
import { Link } from "react-router-dom";


function Product({ title, price, category, thumbnail, id }) {
    return (
        <div className=" rounded-md mt-5 w-80">
            <img src={thumbnail} className=" w-80  object-cover object-center " />
            <div className="text-gray-600 text-sm pt-2 text-center">{category}</div>
            <div className=" text-gray-800 text-xl text-center font-semibold">{title}</div>
            <div className="text-gray-700 text-sm text-center">${price}</div>
            <div className="text-blue-600 text-sm pt-2 text-center">
                <Link to={"/products/" + id}  > View Details</Link>
            </div>
        </div>
    )
}

export default Product;