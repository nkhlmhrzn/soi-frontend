import { FaCartPlus,FaStar } from "react-icons/fa"; 
import Button from "../../../components/buttons/Button";
import { useNavigate } from "react-router-dom";


const ProductDetail = ({detail}) => {
    
    return ( 
        <>
        <div className="flex flex-col bg p-4 text-md">
            <div className="font-bold font-lexend-deca text-[#014061] p-3 text-[40px]">
                <h1>{detail?.title}</h1>                   
            </div>
            <div className="p-3 font-lexend-deca">
                Category: {detail.category} 
            </div>
            <div className="p-3 font-lexend-deca">
                Price: {detail.price}
            </div>
            <div className="flex gap-2 text-[#FFD700] p-3 ">
                <FaStar/><FaStar/><FaStar/><FaStar/><FaStar/>
            </div>
            <div className="font-lexend-deca p-3">
                Description: {detail.description}
            </div>
            <div className="flex justify-center pt-5">
                <Button title="Add to Cart"/>
            </div>
        </div>
        
        </>
     );
}
 
export default ProductDetail;