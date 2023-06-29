import React from "react";
import Product from "./Product";

function ProductList({ product }) {
    return (
        <div className="flex flex-wrap bg-white justify-center items-center pl-16 mt-10">
            {product.map(function (item) {
                return (
                    <Product
                        key={item.title}
                        title={item.title}
                        category={item.category}
                        imgUrl={item.imgUrl}
                        price={item.price}
                    />
                )
            })}
        </div>
    )
}

export default ProductList