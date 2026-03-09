import axios from "axios";
import React from "react";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export default function Register() {

  const [email, setEmail] = useState("");
  const [Fname, setFname] = useState("");
  const [Lname, setLname] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  async function handleRegister() {

    try {

        const response = await axios.post(
        import.meta.env.VITE_BACKEND_URL + "/api/user",
        {
          email: email,
          Fname: Fname,
          Lname: Lname,
          password: password,
        }
      );

      toast.success(response.data.message ,"register success");
      console.log(response.data);

        navigate("/login");

      

    } catch (e) {

      console.log("Error response:", e.response);

      toast.error(
        e.response?.data?.message ||
        e.message ||
        "An error occurred during registration."
      );

    }

  }

  return (

    <div
      className="w-full h-screen flex flex-row justify-center items-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/login.jpg')" }}
    >

      <div className="w-[50%] h-full"></div>

      <div className="w-[500px] h-[650px] backdrop-blur-md rounded-[30px] shadow-2xl flex flex-col justify-center items-center gap-7">

        <input
          placeholder="First Name"
          onChange={(e) => {
            setFname(e.target.value);
          }}
          value={Fname}
          className="w-[300px] h-[50px] border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <input
          placeholder="Last Name"
          onChange={(e) => {
            setLname(e.target.value);
          }}
          value={Lname}
          className="w-[300px] h-[50px] border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <input
          placeholder="Email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          value={email}
          className="w-[300px] h-[50px] border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <input
          type="password"
          placeholder="Password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          value={password}
          className="w-[300px] h-[50px] border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <button
          onClick={handleRegister}
          className="w-[300px] h-[50px] cursor-pointer text-[17px] shadow-2xl bg-blue-500 text-white font-bold rounded-[10px] hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Register
        </button>

        <p className="text-white">
        Already have an account? 
            <span 
                className="cursor-pointer text-blue-300"
            onClick={()=>navigate("/login")}
    >   
 Login
</span>
</p>


      </div>

    </div>

  );
}
