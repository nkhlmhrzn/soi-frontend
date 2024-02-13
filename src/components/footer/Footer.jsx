import { FaFacebook } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaWifi } from "react-icons/fa";
import { FaGooglePlus } from "react-icons/fa";
import { HiDotsCircleHorizontal } from "react-icons/hi";


const Footer=() =>{
    return(
        <>
        <div className="flex">
            <div className="">
                <h1>LOGO</h1>
                <p>SOLOGAN COMPANY</p>
            </div>
            <div className="flex">
                <div>
                    WEEBLY THEMES
                </div>
                <div>
                    PRE-SALE FAQS
                </div>
                <div>
                    SUBMIT A TICKET
                </div>
                <div>
                    SERVICES
                </div>
                <div>
                    THEME TWEAK
                </div>
                <div>
                    SHOWCASE
                </div>
                <div>
                    WIDGEKIT
                </div>
                <div>
                    SUPPORT
                </div>
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
        <div className="flex justify-center gap-5">
            <FaFacebook/>
            <AiFillTwitterCircle/>
            <FaWifi/>
            <FaGooglePlus/>
            <HiDotsCircleHorizontal/>
        </div>
        </>
    )
}

export default Footer;