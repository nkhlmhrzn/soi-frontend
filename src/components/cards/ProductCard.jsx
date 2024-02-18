import { useEffect, useState } from "react";
import { FaRegStar, FaStar } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const ProductCard=({id})=>{
    const navigate =useNavigate()
    const [product,setproduct]= useState()
    const fetchproduct = async()=>{
        fetch(`https://fakestoreapi.com/products/${id}`)
            .then(res=>res.json())
            .then(json=>setproduct(json))
    }
    useEffect(()=>{
            fetchproduct()
    },[])
    
    return(
        <>
        {
            product &&

        <div className=" flex justify-center items-center" onClick={()=>navigate(`/products/${id}`)}>
            <div className="p-4 rounded-md flex flex-col gap-4 shadow-xl w-full justify-center ">
                <div className="bg-blue-500 w-11 rounded-md text-white font-bold p-1">
                    New
                </div>
                <div className="h-[200px] rounded-md ">
                    <img src={product.image} alt="" className="h-full w-full"/>
                </div>
                
                <div className="flex flex-col gap-2 px-2">
                    <div className="font-bold text-xl line-clamp-2 h-[56px]">
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
        }
        </>
    )
}
export default ProductCard;