import { Link, useNavigate } from "react-router-dom";
import Button from "../../components/buttons/Button";
import MyCard from "../../components/cards/MyCard";
import FeatureProduct from "./FeatureProduct";

const Home = () => {
    return ( 
        <>      
        
        <div className="mb-10">
            <div  className=" h-screen w-screen relative ">
            <img src="https://www.pacific-research.com/wp-content/uploads/2020/04/shutterstock_251380513.jpg " className="w-screen h-full"></img>
                <div className="absolute w-full h-[80vh] top-0 flex flex-col justify-center pl-20 gap-4">
                    <div className="font-bold text-7xl font-lexend-deca text-primary leading-none">
                        <div className="mb-4">
                            Welcome To
                        </div>
                        <div className="text-white px-2  bg-primary rounded-lg inline">My Shop</div>
                    </div>
                <div className="text-2xl font-medium text-white">Enjoy the real experience of Shopping Digitallly!!!</div>
            </div>
            </div>
        </div> 
        <FeatureProduct/>
        <div className="mb-10">
            <div  className="h-md w-screen relative ">
            <img src="https://images.unsplash.com/photo-1599239663833-4c1cdc22892a?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="w-screen h-full"></img>
                <div className="absolute w-full h-md top-0 flex flex-col justify-center gap-4">
                    <div className="flex justify-center">
                        <div className="h-s w-sm  justify-center  items-center">
                            <img src="https://www.slazzer.com/static/images/home-page/visualize-product-before.jpg" alt="" 
                            className=""/>
                            <div className="text-2xl font-medium text-white flex justify-center">
                                    Explore more of our trending products with 20% off 
                            </div>
                        </div>
                    </div>
            </div>
            </div>
        </div> 
        <FeatureProduct/>
        </>
     );
}
 
export default Home;