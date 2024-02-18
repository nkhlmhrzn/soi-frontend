import { useEffect, useState } from "react";
import ProductGalary from "./component/ProductGalary";
import ProductDetail from "./component/ProductDetail";

const ProductProfile = () => {
    const [detail,setdetail] = useState();
    const fetchdetail = ()=>{
        fetch('https://fakestoreapi.com/products/1')
            .then(res=>res.json())
            .then(json=>setdetail(json))
    }
    useEffect(()=>{
fetchdetail()
    },[])


    return ( 
        <>
        {
           
            detail &&
            <>
            <div className="flex">
            <ProductGalary/>
            <ProductDetail detail={detail}/>
            </div>
            </>
            
        }
        </>
     );
}
 
export default ProductProfile;