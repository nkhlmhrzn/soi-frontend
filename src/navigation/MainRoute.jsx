import { Route, Routes } from "react-router-dom";
import ContactUs from "../pages/contactUs/ContactUs";
import Home from "../pages/home/Home";
import Services from "../pages/services/Services";
import ProductCard from "../components/cards/ProductCard";
import ProductProfile from "../pages/product/ProductProfile";

const MainRoute = () => {
    return ( 
        <>
       <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/contactus" element={<ContactUs/>}></Route>
        <Route path="/services" element={<Services/>}></Route>
        <Route path="/product" element={<ProductProfile/>}></Route>
       </Routes>
        </>
     );
}
 
export default MainRoute;