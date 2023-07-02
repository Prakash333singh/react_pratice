import React from "react";
import { useParams } from "react-router";
import allData from "./DummyData";
import { HiArrowNarrowLeft } from "react-icons/hi";
import { Link } from "react-router-dom";



function ProductDetails() {
    const params = useParams();
    const sku = params.sku;
    console.log("sku is", sku, params);
    let product;   // wo product jiska data mujhe url mai se mila hai  undefined hota hai agar product nahi mila tuo
    for (let i = 0; i < allData.length; i++) {
        const p = allData[i];
        if (sku == p.sku) {
            product = p;
            break;
        }

        console.log("product found", product);

    }
    return (
        <div className="bg-gray-100 p-20">
            <Link to="/" className="text-3xl"><HiArrowNarrowLeft className="text-gray-700" /></Link>
            <div className="mx-2 flex flex-col justify-center align-middle items-center bg-white pt-20 pb-20">
                <div>
                    <img src={product.imgUrl} className="w-96 rounded-md " />
                </div>
                <div>
                    <h1 className="text-3xl text-indigo-500 mb-3">{product.title}</h1>
                    <input type="text" className=" border border-gray-400  w-10" />
                    <button className="rounded bg-red-500 text-white py-2 px-4 font-semibold mx-4">Add to cart</button>
                </div>
            </div>

        </div>

    )

}
export default ProductDetails;

//input mai value likhi hai value={1}