import { FaFacebook } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaWifi } from "react-icons/fa";
import { FaGooglePlus } from "react-icons/fa";
import { HiDotsCircleHorizontal } from "react-icons/hi";


const Footer=() =>{
    return(
        <>
        <div className="w-screen bg-primary  ">
        <div className="flex text-slate-100 justify-around">
            <div className="flex flex-col justify-center ">
                <h1 className="font-bold text-2xl">LOGO</h1>
                <p>SOLOGAN COMPANY</p>
            </div>
            <div className="flex gap-28 justify-around items-center">
                <div className="">

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
                <div className="">

                    <div>
                        SERVICES
                    </div>
                    <div>
                        THEME TWEAK
                    </div>
                </div>
                <div className="">

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
                <div className="">

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
        <div className="flex justify-center gap-5 text-white text-xl">
            <div className="hover:scale-150 trasition-all cursor-pointer">
                <FaFacebook/>
            </div>
            <div className="hover:scale-150 trasition-all cursor-pointer">
            <AiFillTwitterCircle/>
            </div>
            <div className="hover:scale-150 trasition-all cursor-pointer">
            <FaWifi/>
            </div>
            <div className="hover:scale-150 trasition-all cursor-pointer">
            <FaGooglePlus/>
            </div>
            <div className="hover:scale-150 trasition-all cursor-pointer">
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