import { FaFacebook } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaWifi } from "react-icons/fa";
import { FaGooglePlus } from "react-icons/fa";
import { HiDotsCircleHorizontal } from "react-icons/hi";


const Footer=() =>{
    return(
        <>
        <div className="w-screen bg-[#014061]  ">
        <div className="flex gap-40 text-slate-100 ">
            <div className="flex flex-col justify-center px-10 ">
                <h1 className="font-bold ">LOGO</h1>
                <p>SOLOGAN COMPANY</p>
            </div>
            <div className="flex gap-28 justify-center items-center">
                <div className="flex flex-col">

                <div>
                    WEEBLY THEMES
                </div>
                <div>
                    PRE-SALE FAQS
                </div>
                <div>
                    SUBMIT A TICKET
                </div>
                </div>
                <div className="flex flex-col">

                    <div>
                        SERVICES
                    </div>
                    <div>
                        THEME TWEAK
                    </div>
                </div>
                <div className="flex flex-col">

                <div>
                    SHOWCASE
                </div>
                <div>
                    WIDGEKIT
                </div>
                <div>
                    SUPPORT
                </div>
                </div>
                <div className="flex flex-col">

                <div>
                    ABOUT US
                </div>
                <div>
                    CONTACT US 
                </div>
                    AFFILIATES 
                <div>
                    RESOURCES
                </div>
                </div>
            </div>
        </div>
        <div className="w-full h-[1.5px] bg-white my-5">
        </div>
        <div className="flex justify-center gap-5 ">
            <div className="hover:scale-125 trasition-all cursor-pointer">
                <FaFacebook/>
            </div>
            <div className="hover:scale-125 trasition-all cursor-pointer">
            <AiFillTwitterCircle/>
            </div>
            <div className="hover:scale-125 trasition-all cursor-pointer">
            <FaWifi/>
            </div>
            <div className="hover:scale-125 trasition-all cursor-pointer">
            <FaGooglePlus/>
            </div>
            <div className="hover:scale-125 trasition-all cursor-pointer">
            <HiDotsCircleHorizontal/>
            </div>
        </div>
            <div className="flex justify-center text-white m-4 ">
             {'\u00a9'}Copyright.All rights reserved.
            </div>
        </div>
        </>
    )
}

export default Footer;