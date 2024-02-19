import { AiOutlineBars } from "react-icons/ai";
import { useEffect, useState } from "react";
import  { navData } from "./navData";
import { useNavigate } from "react-router-dom";
import { ImCross } from "react-icons/im";


const Navbar = (path) => {
const [active,setactive] = useState(navData[0])
console.log(active);
   const navigate = useNavigate()
   const [openDrawer,setOpendrawer] = useState(false);
   
    return ( 
        <>
        <div className="w-screen flex justify-center  bg-primary ">
        <div className="hidden md:flex justify-between items-center p-5 w-2xl text-xl h-20">
            <div className="ps-5 text-white font-bold text-3xl">
                CUBA
            </div>
            <div className="flex gap-10 pr-10 text-white">

            {navData.map((nav)=>{
                return(
                    
                    <div
                     className={`hover:scale-125 hover:bg-background hover:rounded-xl ${active.id===nav.id ? "": ""}
                    transition-all cursor-pointer font-medium text-lg px-4`}
                    onClick={()=>navigate(nav.path)} 
                    key={nav.id} >
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
        </div>
        </div>

        {/* Mobile Nabvbar */}
        <div className={`flex flex-col w-screen bg-primary md:hidden ${openDrawer?"fixed":"relative"} z-30 `}>
        <div className="  justify-between items-center p-5  text-2xl h-20 flex text-white ">
            <div className="ps-5 text-white font-bold text-3xl ">
                CUBA
            </div>

            {openDrawer?<ImCross onClick={()=>setOpendrawer(!openDrawer)}/>:<AiOutlineBars onClick={()=>setOpendrawer(!openDrawer)}/>}
            
            
        </div>

        {openDrawer&&
        <div className={`w-full h-full inset-0 z-20 fixed bg-[rgba(0,0,0,0.4)]  mt-20`}>
            
           <div className="h-2/3 w-full bg-white ">
            {navData.map((nav)=>{
                return(
                    <div
                     className=" hover:bg-background  cursor-pointer font-bold text-lg flex justify-center h-10 p-5"
                    onClick={()=>navigate(nav.path)} 
                    >
                    {nav.title}
                </div>
                )
            })}
                
           </div>
          </div>
        }
        </div>
        </>
     );
}
 
export default Navbar;