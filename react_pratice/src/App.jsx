import React, { useState } from "react";
import ProductList from "./components/ProductList";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

function App() {
  const [query, setQuery] = useState("");
  const [sort, setSort] = useState("default");
  const allData = [
    {
      title: "blue t-shirt",
      price: "25",
      imgUrl: "https://trycasuals.com/wp-content/uploads/2018/06/tshirt4-4.jpg",
      category: "T-shirt"

    },
    {
      title: "black coffee mug",
      price: "85",
      imgUrl: "https://trycasuals.com/wp-content/uploads/2018/06/mug-coffee-5-600x600.jpg",
      category: "Mugs"

    },
    {
      title: "Green coffee mug",
      price: "55",
      imgUrl: "https://trycasuals.com/wp-content/uploads/2018/06/mug-white-4.jpg",
      category: "Mugs"
    },

  ];

  //  if (sort=="price") {
  //   allData.sort(function(x,y){
  //     return x-y;
  //   });
  //  }
  //  else if(sort == "name"){
  //   allData.sort(function(x,y){
  //     return x.title-y.title;
  //   })
  //  }

  let data = allData.filter(function (item) {
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
    <>
      <Nav />
      <div className="box-border bg-slate-100 m-0 p-0 flex flex-col justify-center items-center pb-20">
        <div className="flex gap-x-28 items-center">
          <input value={query} placeholder="search for product..." className="border border-gray-500 rounded-md mb-2 mt-10 px-3 py-1" onChange={handleQueryChange} />
          <select className="border border-gray-500 rounded-md w-32 h-8 mt-8 text-gray-500" onChange={handleSortChange} value={sort}>
            <option value="default"> Default Sort</option>
            <option value="name">Sort by Name</option>
            <option value="price">Sort by Price</option>
          </select>
        </div>
        <ProductList product={data} />

      </div>
      <Footer />
    </>
  );
}

export default App;
