import React from "react";
import Usestate from "./usestate.jsx";
import { Link } from "react-router-dom";
function Header() {
  return (
    <div className="bg-gray-200 p-4">
      <h1 className=" text-lg font-bold  ">Header</h1>
      <p className=" text-blue-700 text-[14px] ">
        This is the header component.
      </p>
      <div className="flex justify-center gap-4 mt-4">
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/signup">Signup</Link>
        <Link to="/testing">test</Link>
        
      </div>
    </div>
  );
}

export default Header;
