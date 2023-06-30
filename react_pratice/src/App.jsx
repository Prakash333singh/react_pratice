import React, { useState } from "react";
import ProductList from "./components/ProductList";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Button from "./components/Button";

function App() {
  const [query, setQuery] = useState("");
  const [sort, setSort] = useState("default");
  const allData = [
    {
      title: "blue t-shirt",
      price: "1025",
      imgUrl: "https://trycasuals.com/wp-content/uploads/2018/06/tshirt4-4.jpg",
      category: "Tshirt"

    },
    {
      title: "black coffee mug",
      price: "850",
      imgUrl: "https://trycasuals.com/wp-content/uploads/2018/06/mug-coffee-5-600x600.jpg",
      category: "Mugs"

    },
    {
      title: "Green coffee mug",
      price: "550",
      imgUrl: "https://trycasuals.com/wp-content/uploads/2018/06/mug-white-4.jpg",
      category: "Mugs"
    },
    {
      title: "Personalised Mug",
      price: "280",
      imgUrl: "https://trycasuals.com/wp-content/uploads/2018/06/mug-yellow-4-600x600.jpg",
      category: "Mugs"

    },
    {
      title: "Printed Brown Tshirt",
      price: "32",
      imgUrl: "https://trycasuals.com/wp-content/uploads/2018/06/tshirt6-4-600x600.jpg",
      category: "Tshirts"

    },
    {
      title: "Printed Dark Blue Tshirt",
      price: "580",
      imgUrl: "https://trycasuals.com/wp-content/uploads/2018/06/tshirt2-4-600x600.jpg",
      category: "Tshirts"
    },
    {
      title: "Typography Teal Printed Tshirt",
      price: "215",
      imgUrl: "https://trycasuals.com/wp-content/uploads/2018/06/tshirt7-4-600x600.jpg",
      category: "Tshirt"

    },
    {
      title: "Printed Green Tshirt",
      price: "825",
      imgUrl: "https://trycasuals.com/wp-content/uploads/2018/06/tshirt5-4-600x600.jpg",
      category: "Tshits"

    },
    {
      title: "Printed Tshirt Coffee Black Color",
      price: "550",
      imgUrl: "https://trycasuals.com/wp-content/uploads/2018/06/tshirt3-4.jpg",
      category: "T-shits"
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
      <div className="box-border bg-slate-100 m-0 p-0 flex flex-col justify-center items-center px-10 py-10 pb-20">
        <div className="flex gap-x-28 items-center">
          <input value={query} placeholder="search for product..." className="border border-gray-500 rounded-md mb-2 mt-10 px-3 py-1" onChange={handleQueryChange} />
          <select className="border border-gray-500 rounded-md w-32 h-8 mt-8 text-gray-500" onChange={handleSortChange} value={sort}>
            <option value="default"> Default Sort</option>
            <option value="name">Sort by Name</option>
            <option value="price">Sort by Price</option>
          </select>
        </div>
        <div className="pb-40">
          <ProductList product={data} />
          <Button />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
