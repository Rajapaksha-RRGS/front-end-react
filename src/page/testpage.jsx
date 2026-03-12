import React from 'react'
import { useState } from 'react';
import midiaUplod from "../utils/mediaUplod";

function Testpage() {
  const [file, setImages] = useState(null);

  function fileUpload() {
    midiaUplod(file)
      .then((res) => {
        console.log(res);
      })
      .catch((e) => {
        console.log(e);
      });
  }

  return (
    <div className="w-full h-screen flex justify-center items-center flex-col">
      <input
        type="file"
        className=""
        onChange={(e) => {
          setImages(e.target.files[0]);
          console.log(e.target.files[0]);
        }}
      />
      <button
        onClick={fileUpload}
        className="bg-green-500 text-white font-bold py-2 px-4 rounded"
      >
        Upload
      </button>
    </div>
  );
}

export default Testpage;
