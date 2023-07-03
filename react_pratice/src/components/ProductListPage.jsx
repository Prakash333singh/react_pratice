import React, { useEffect } from 'react'
// import allData from "../components/DummyData";
import ProductList from './ProductList';
import { useState } from 'react';
import { getProductList } from './api';
import Loading from './Loading';


function ProductListPage() {
    const [productList, setproductList] = useState([]);


    const [query, setQuery] = useState("");
    const [sort, setSort] = useState("default");




    useEffect(function () {
        const xyz = getProductList();
        xyz.then(function (response) {
            // console.log("response", response.data.products);

            setproductList(response.data.products);

        })

    }, []);

    let data = productList.filter(function (item) {
        const lowerCaseTitle = item.title.toLowerCase();
        const lowerCaseQuery = query.toLowerCase();
        return lowerCaseTitle.indexOf(lowerCaseQuery) != -1;
    });

    if (sort == "price") {
        data.sort(function (x, y) {
            return x.price - y.price;
        });
    }
    else if (sort == "name") {
        data.sort(function (x, y) {
            return x.title < y.title ? -1 : 1;
        })
    }

    function handleQueryChange(event) {
        setQuery(event.target.value);

    }
    function handleSortChange(event) {
        // console.log("selected option ", event.target.value);
        setSort(event.target.value);

    }


    return (
        <div>
            <div className="flex gap-x-28 justify-center align-middle">
                <input value={query} placeholder="search for product..." className="border border-gray-500 rounded-md px-3 py-1" onChange={handleQueryChange} />
                <select className="border border-gray-500 rounded-md w-32 h-8 text-gray-500" onChange={handleSortChange} value={sort}>
                    <option value="default"> Default Sort</option>
                    <option value="name">Sort by Name</option>
                    <option value="price">Sort by Price</option>
                </select>
            </div>
            <ProductList product={data} />
        </div>
    )
}

export default ProductListPage
