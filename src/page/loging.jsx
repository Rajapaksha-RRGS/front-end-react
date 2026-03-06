import axios from "axios";
import React, { use } from "react";
import { useState } from "react";
import { toast } from "react-hot-toast";

export default function Loging() {

  const[email,setEmail]=useState("");
  const[password, setPassword]=useState("");

   async function handleLogin(){
    // Implement login logic here, such as making an API call to authenticate the user
    console.log("Email:", email);
    console.log("Password:", password);
    try{
      const response = await axios.post("http://localhost:5000/api/user/login",{
      email:email,
      password:password
    });
    toast.success(response.data.massage);
    console.log(response.data.massage); 

    }catch(e){
      toast.error(e.response?.data?.massage || "An error occurred during login.");
      console.log(e.response?.data?.massage);
    } ;
  }

  return (
    <div 
      className="w-full h-screen flex flex-row justify-center items-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/login.jpg')" }}
    >
      <div className="w-[50%] h-full">

      </div>
      <div className="w-[500px] h-[600px]  backdrop-blur-md  rounded[30px] shadow-2xl flex flex-col justify-center items-center gap-9 ">
         <input onChange={(e)=>{
           setEmail(e.target.value);
           console.log(e.target.value);
         }}

         value={email}
         

         className="w-[300px] h-[50px] border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"  />
          <input onChange={(e)=>{
            setPassword(e.target.value);
            console.log(e.target.value);
          }} 
           value={password}
          
          className="w-[300px] h-[50px] border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"  />

          <button onClick={handleLogin} className="w-[300px] h-[50px] cursor-pointer text-[17px] shadow-2xl bg-blue-500 text-white text-bold rounded-[10px] hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
            Login
          </button>
      </div>
    </div>
  );
}
