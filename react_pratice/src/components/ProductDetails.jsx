import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { HiArrowNarrowLeft } from "react-icons/hi";
import { Link } from "react-router-dom";
import { getProductData } from "./api";
import Loading from "./Loading";



function ProductDetails() {
    const { id } = +(useParams().id);
    const [product, setProduct] = useState();


    useEffect(function () {
        const p = getProductData(id);
        p.then(function (response) {
            setProduct(response.data);
        })
            .catch((error) => {
                console.error('Error:', error);
                // Handle the error here
            });;
    }, []);


    return (
        product ?
            <>
                <div className="bg-gray-100 p-20">
                    <Link to="/" className="text-3xl"><HiArrowNarrowLeft className="text-gray-700" /></Link>
                    <div className="mx-2 flex flex-col justify-center align-middle items-center bg-white pt-20 pb-20">
                        <div>
                            <img src={product.thumbnail} className="w-96 rounded-md " />
                        </div>
                        <div>
                            <span>{product.category}</span>
                            <p>{product.description}</p>
                            <h1 className="text-3xl text-indigo-500 mb-3">{product.title}</h1>
                            <input type="text" className=" border border-gray-400  w-10" />
                            <button className="rounded bg-red-500 text-white py-2 px-4 font-semibold mx-4">Add to cart</button>
                        </div>
                    </div>

                </div></> : <><Loading /></>

    )

}
export default ProductDetails;

//input mai value likhi hai value={1}