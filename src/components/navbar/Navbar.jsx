import { AiOutlineBars } from "react-icons/ai";
import { useEffect, useState } from "react";
import  { navData } from "./navData";
import { useNavigate } from "react-router-dom";


const Navbar = (path) => {
const [active,setactive] = useState(navData[0])
   const navigate = useNavigate()
    return ( 
        <>
        <div className="w-full flex justify-center  bg-primary ">
        <div className="flex justify-between items-center p-5 w-2xl text-xl h-20">
            <div className="ps-5 text-white font-bold">
                CUBA
            </div>
            <div className="hidden md:flex gap-10 pr-10 text-white">

            {navData.map((nav)=>{
                return(
                    
                    <div className={`hover:scale-125 hover:bg-background hover:rounded-xl ${active.id===nav.id ? "bg-black": ""}
                    transition-all cursor-pointer font-medium text-lg px-4`}
                    onClick={()=>navigate(nav.path)} key={nav.id} >
                    {nav.title}
                </div>
            )
            })}      
                {/* <div className="hover:scale-125 transition-all cursor-pointer"onClick={()=>navigate()}>
                    About Us
                </div>
                <div className="hover:scale-125 transition-all cursor-pointer"onClick={()=>navigate()}>
                    Contact Us
                </div> */}
            </div>
            <div className="md:hidden text-white">
                <AiOutlineBars/>
            </div>
        </div>
        </div>
        </>
     );
}
 
export default Navbar;