import { useEffect, useState } from "react";
import NewProductCard from "../../../components/cards/NewProductCard";

const ProductList = () => {
    const [searchValue, setSearchValue] = useState("");
    const [productlist,setProductList] = useState([]);
    const handleSearchChange=(e)=>{
        setSearchValue(e.target.value)
    }
    const fetchproducts = ()=>{
        fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>setProductList(json))
    }
    useEffect(()=>{
        fetchproducts()
    },[])
    console.log(searchValue);
    return ( 
        <>
            <div className="flex flex-col items-center">
                <div className="p-5">
                <input type="text" onChange={handleSearchChange} value={searchValue} className="border-2 "/>
                <div className="grid grid-cols-2 lg:grid-cols-4  xl:w-2xl cursor-pointer">
                    {productlist.map((item)=>{
                        return(
                            <NewProductCard product={item} key={item.id}/>
                        )
                    })}
                </div>
                </div>
            </div>
        </>
    );
}
 
export default ProductList;