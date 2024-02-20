import { Route, Routes } from "react-router-dom";
import ContactUs from "../pages/contactUs/ContactUs";
import Home from "../pages/home/Home";
import Services from "../pages/services/Services";
import ProductCard from "../components/cards/ProductCard";
import ProductProfile from "../pages/product/ProductProfile";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import ProductList from "../pages/product/component/ProductList";

const MainRoute = () => {
    return ( 
        <>
        <Navbar/>
        
        <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/contactus" element={<ContactUs/>}></Route>
        <Route path="/services" element={<Services/>}></Route>
        <Route path="/products/:id/cat" element={<ProductProfile/>}></Route>
        <Route path="/productlist" element={<ProductList/>}></Route>
       </Routes>
       <Footer/>
        </>
     );
}
 
export default MainRoute;