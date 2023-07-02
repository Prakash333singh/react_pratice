
// import ProductList from "./components/ProductList";
import Nav from "./components/Nav";
import ProductListPage from "./components/ProductListPage";
import ProductDetails from "./components/ProductDetails";
import { Route, Routes } from "react-router";

function App() {


  return (
    <div>
      <Nav />
      <Routes>
        <Route index element={<ProductListPage />}></Route>
        <Route path="/products/:sku/" element={<ProductDetails />}></Route>
      </Routes>
    </div>
  );
}

export default App;








{/* <div className="box-border bg-slate-100 m-0 p-0 flex flex-col justify-center items-center px-10 py-10 pb-20"> */ }
{/* <ProductListPage /> */ }
{/* <div className="pb-40"> */ }
{/* <Button /> */ }
{/* </div> */ }
{/* </div> */ }