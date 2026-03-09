import React, { useEffect, useState } from 'react'
import { sampleProducts } from '../../assets/sampleData';
import axios from 'axios';

function AdminproductPage() {

    const [products, setProducts] = useState(sampleProducts);

    useEffect(()=>{
        axios.get(import.meta.env.VITE_BACKEND_URL + "/api/product")
        .then(response => {
            setProducts(response.data);
        })
        .catch(error => {
            console.error("Error fetching products:", error);
        });
    }, [] )

    

  return (
    <div className="w-full h-screen  bg-yellow-50 max-h-full overflow-y-scroll ">

            <table className='w-full text-center border-collapse border border-gray-300'>
                <thead>
                    <tr>
                        <th>product Id</th>
                        <th>product Name</th>
                        <th>product images</th>
                        <th>Laelled Price</th>
                        <th>Price</th>
                        <th>Stock</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map(
                        (product,index)=>{
                            return(
                                <tr key={index} >
                                    <td>{product.productId}</td>
                                    <td>{product.productName}</td>
                                    <td><img src={product.img} className="w-[50px] h-[50px] object-cover" alt={product.productName} /></td>
                                    <td>{product.labelPrice}</td>
                                    <td>{product.Price}</td>
                                    <td>{product.stock}</td>
                                </tr>
                            )
                        }
                    )}
                </tbody>
            </table>

        
    </div>
  )
}

export default AdminproductPage
