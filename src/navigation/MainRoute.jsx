import { Route, Routes } from "react-router-dom";
import ContactUs from "../pages/contactUs/ContactUs";
import Home from "../pages/home/Home";
import Services from "../pages/services/Services";

const MainRoute = () => {
    return ( 
        <>
       <Routes>
        |<Route path="/" element={<Home/>}></Route>
        |<Route path="/contactus" element={<ContactUs/>}></Route>
        |<Route path="/services/:id" element={<Services/>}></Route>
       </Routes>
        </>
     );
}
 
export default MainRoute;