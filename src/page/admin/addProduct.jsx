import React from 'react'
import { Link } from 'react-router-dom';
import midiaUplod from "../../utils/mediaUplod";
import { toast } from 'react-hot-toast';
import axios from 'axios';


export default function AddProduct() {
   
   const [productId, setProductId] = React.useState("");
   const [productName, setProductName] = React.useState("");
   const [altName, setAltName] = React.useState([]);
    const [description, setDescription] = React.useState("");
    const [img, setImg] = React.useState([]);
    const [labelPrice, setLabelPrice] = React.useState('');
    const [Price, setPrice] = React.useState('');
    const [stock, setStock] = React.useState('');
    const [isAvailable, setIsAvailable] = React.useState(true);

    const navigate = useNavigate();

    async function addproduct(e){

        const token = localStorage.getItem("token");
        if(token == null){
            toast.error("Please login to add product");
            return;
        }else{
            console.log("Token found:", token);
        }

        if(img.length<=0){
            toast.error("Please select at least one image");
            return;
        }

        const promisesarry = [];
        for(let i=0;i<img.length;i++){
            promisesarry.push(midiaUplod(img[i]));}

         try {

            const imageUrls = await Promise.all(promisesarry).then((res) => {
                console.log("All images uploaded successfully:", res);
                
                

                const productData = {
                    productId,
                    productName,
                    altName,
                    description,
                    img: res,
                    labelPrice,
                    Price,
                    stock,
                    isAvailable
                };
                axios.post(import.meta.env.VITE_BACKEND_URL + "/api/product", productData,{
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                } ).then((response) => {
                    toast.success(response.data.message,"add product Successfull");
                    navigate("/admin/product");
                    console.log(response.data);
                }).catch((e) => {
                    console.log(e);
                    toast.error("Error adding product");
                });

            })

         } catch (e) {
            console.log(e);
            toast.error("Error uploading images");
            return;
         }

        }
            
       
           

    

  return (
    <div className='w-full h-full flex flex-col justify-center items-center border border-amber-600 border-4'>
       
       <div className="text-center mb-8">
        <h1 className='text-4xl font-bold text-black '>Add Product</h1>
       </div>
       
       <div className=" flex flex-col gap-4 ">
        <input type="text" placeholder="Product ID" value={productId} onChange={(e) => setProductId(e.target.value)} />
        <input type="text" placeholder="Product Name" value={productName} onChange={(e) => setProductName(e.target.value)} />
        <input type="text" placeholder="Alt Name (comma separated)" value={altName} onChange={(e) => setAltName(e.target.value.split(","))} />
        <textarea placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} />
        <input type="file" multiple placeholder="Image URLs (comma separated)"  onChange={(e) => setImg(e.target.files)} />
        <label className='border border-amber-600 p-2.5 border' htmlFor="labelPrice">
              Label Price: 
            <input className=' p-5' type="number" id="labelPrice" placeholder="Label Price" value={labelPrice} onChange={(e) => setLabelPrice(parseFloat(e.target.value))} />
        </label>
        <input type="number" placeholder="Price" value={Price} onChange={(e) => setPrice(parseFloat(e.target.value))} />
        <input type="number" placeholder="Stock" value={stock} onChange={(e) => setStock(parseInt(e.target.value))} />
        <label>
          <input type="checkbox" checked={isAvailable} onChange={(e) => setIsAvailable(e.target.checked)} />
          Is Available
        </label>
       </div>
        <div className="w-full flex flex-row justify-center items-center">
            <button className='bg-blue-500 text-white py-2 px-4 rounded' onClick={addproduct}>
                Add product
            </button>
            <Link to="/admin/product" className='bg-gray-500 text-white py-2 px-4 rounded ml-4'>
                Cancel
            </Link>
        </div>
    </div>
  )
          
}


