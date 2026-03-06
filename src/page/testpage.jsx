import React from 'react'
import { useState } from 'react';


function Testpage() {
  const [count, setCount] = useState(0);
  const  [status, setStatus] = useState("passed");

  return <div className="w-full h-screen flex justify-center items-center flex-col">

    <div className="w-[350px] h-[350px] bg-amber-500 flex justify-center items-center rounded-lg">
        <button onClick={
          ()=>{
          console.log("+ clicked")
          setCount(count+1)
          
        }} className=" w-[80px] h-[50px] text-[30px] border-2 rounded-lg border-black bg-green-400 text-black font-bold text-center  m-5">+</button>
        <span className="text-[30px] font-bold text-black">{count}</span>
        <button onClick={()=>{
          console.log("- clicked")
          setCount(count- 1)
        }} className=" w-[80px] h-[50px] text-[30px] border-2 rounded-lg border-black bg-red-400 text-black font-bold text-center  m-5">-</button>
    </div>
    <div className="w-[350px] h-[350px] bg-purple-400 flex flex-col justify-center items-center rounded-lg">
        {/* id user passed or failed test */}
        <span className='text-[40px] font-bold text-center w-[100px] h-[40px] mx-[10px] flex justify-center' >
            {status}
        </span>
        <div className="w-full flex justify-center items-around mt-10 gap-11">
          <button onClick={()=>{
            setStatus("passed")
          }} className="w-[100px] h-[40px] bg-blue-500 text-white font-bold rounded-lg">
            passed
        </button>
        <button onClick={()=>{
          setStatus("Failed")
        }} className="w-[100px] h-[40px] bg-red-500 text-white font-bold rounded-lg">
          failed  
        </button>
        </div>
    </div>
  </div>;
}

export default Testpage;
