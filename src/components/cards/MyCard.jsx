import { SiPuma } from "react-icons/si";
import { FaCartPlus,FaStar } from "react-icons/fa"; 
import Button from "../buttons/Button";

const MyCard=()=>{
    return(
        <>
        <div className="flex justify-center">
            <div className="p-3 rounded-md shadow-xl w-xs h-l">
                <div className="flex justify-between">
                    <SiPuma/>
                    <FaCartPlus/>
                </div>
                <div className="h-[300px] flex justify-center rounded-md">
                    <img src="https://gfx.r-gol.com/media/res/products/685/137685/465x605/koszulka-puma-ftblplay-logo-tee_1.png" alt="" />
                </div>
                <div className="flex flex-col gap-2">
                    <div className="font-bold font-lexend-deca text-xl">
                        T-Shirt
                    </div>
                    <div className="">
                        We present you the best quality product of all time.
                    </div>
                    <div className="flex gap-2 text-[#FFD700]">
                        <FaStar/><FaStar/><FaStar/><FaStar/><FaStar/>
                    </div>
                    <div className="flex justify-center font-bold">
                        Rs.7000/-
                    </div>
                    <div className="flex justify-center ">
                        <Button title="Add to Cart"/>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
   
export default MyCard;