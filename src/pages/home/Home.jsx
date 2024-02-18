import { Link, useNavigate } from "react-router-dom";
import Button from "../../components/buttons/Button";

const Home = () => {
const navigate= useNavigate()

    return ( 
        <>      
        
        <div className="">
            <div  className=" h-screen w-screen relative ">

            <img src="https://www.pacific-research.com/wp-content/uploads/2020/04/shutterstock_251380513.jpg " className="w-full h-full"></img>

                <div className="absolute w-full h-[80vh] top-0 flex flex-col justify-center pl-20 gap-4">



            <div className="font-bold text-7xl font-lexend-deca text-primary leading-none">
                
               <div className="mb-4">
                 Welcome To</div> <div className="text-white px-2  bg-primary rounded-lg inline">My Shop</div></div>
            <div className="text-2xl font-medium text-white">Enjoy the real experience of Shopping Digitallly!!!</div>
            </div>
                </div>

            {/* <Button title="Home"/>
            <Button title="Services" onClick={()=>navigate("/services")}/>
            <Button title="ContactUs" onClick={()=>navigate("/contactus")}/>  
            <Button title="Product" onClick={()=>navigate("/product")}/> */}
        </div> 

        </>
     );
}
 
export default Home;