import React from "react";
import Product from "./Product";

function ProductList({ product }) {
    return (

        <div className="flex flex-wrap bg-white justify-center items-center gap-x-7 pt-24 pb-40 mt-2">
            {product.map(function (item) {
                return (
                    <Product
                        key={item.title}
                        // title={item.title}
                        // category={item.category}
                        // imgUrl={item.imgUrl}
                        // price={item.price}

                        {...item}
                    />
                )
            })}

        </div>


    )
}

export default ProductList