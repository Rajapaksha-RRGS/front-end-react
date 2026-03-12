import React from "react";
import { Link, Route,Routes } from "react-router-dom";
import AdminproductPage from "./admin/AdminproductPage";
import AddProduct from "./admin/addProduct";

export default function Admin() {
  return (
    <div className=" w-full h-screen flex">
      <div className="h-full w-[200px] bg-blue-800 flex flex-col items-center gap-4 py-4 text-white">
        <Link to="/admin/product">product</Link>
        <Link to="/admin/order">order</Link>
        <Link to="/admin/user">user</Link>
        <Link to="/admin/add-product">Add Product</Link>
      </div>

      <div className="h-full w-[calc(100%-200px)] bg-green-400">
        <Routes path="/*">
          <Route path="/product" element={<AdminproductPage />} />
          <Route path="/order" element={<h1>Order Page</h1>} />
          <Route path="/user" element={<h1>User Page</h1>} />
          <Route path="/Reviews" element={<h2>Reviews Page</h2>} />
          <Route path="/add-product" element={<AddProduct />} />
        </Routes>
      </div>
    </div>
  );
}
