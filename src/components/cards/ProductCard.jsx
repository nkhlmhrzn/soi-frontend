import { useEffect, useState } from "react";
import { FaRegStar, FaStar } from "react-icons/fa";

const ProductCard=()=>{
    const [product,setproduct]= useState()
    const fetchproduct = async()=>{
        fetch('https://fakestoreapi.com/products/1')
            .then(res=>res.json())
            .then(json=>setproduct(json))
    }
    useEffect(()=>{
        fetchproduct()
    },[])
    console.log(product)
    return(
        <>
        <div className=" flex justify-center items-center">
            <div className="p-3 rounded-md flex flex-col gap-4 shadow-xl w-xs justify-center ">
                <div className="bg-blue-500 w-11 rounded-md text-white font-bold p-1">
                    New
                </div>
                <div className="h-[200px] rounded-md ">
                    <img src="https://i.etsystatic.com/17942801/r/il/b921ae/5502735393/il_570xN.5502735393_kd8a.jpg" alt="" className="h-full w-full"/>
                </div>
                
                <div className="flex flex-col gap-2 px-2">
                    <div className="font-bold text-xl ">
                        {product.title}
                    </div>
                    <div className="font-bold text-xl ">
                        Rs. {product.price}
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="flex gap-1 text-[#FFD700]">
                            <FaStar/><FaStar/><FaStar/><FaStar/><FaStar/>
                        </div>
                        <div className="text-gray-400 ">
                            Review (125)
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
export default ProductCard;