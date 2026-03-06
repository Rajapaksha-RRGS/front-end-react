import React from "react";

export default function Usestate() {
  return (
    <div className="w-full  h-screen flex  items-center justify-content justify-around  bg-green-700">
      <div className="w-145.5 h-145.5 bg-red-400 flex justify-around  flex-col items-center">
        <div className="w-130.5 h-130.5 bg-amber-300 relative flex justify-around  flex-col items-center">
          <div className="w-[100px] h-[100px] absolute bottom-[0px] right-[0px] bg-pink-500"></div>
          <div className="w-[100px] h-[100px] bg-blue-500"></div>
          <div className="w-[100px] h-[100px] bg-green-500"></div>
          <div className="w-[100px] h-[100px] bg-purple-500"></div>
        </div>
      </div>
    </div>
  );
}
