import { Link, useNavigate } from "react-router-dom";
import Button from "../../components/buttons/Button";

const Home = () => {
const navigate= useNavigate()

    return ( 
        <>      
        
        <div className="">
            <div  className="background-image h-screen w-screen relative ">

                <div className="absolute w-full h-full">

            <img src="https://www.pacific-research.com/wp-content/uploads/2020/04/shutterstock_251380513.jpg " className="w-full h-full"></img>


<div className="">

            <h1 className="pl-10 font-bold tex-2xl font-lexend-deca">Welcome To Error Coding</h1>
</div>
            </div>
                </div>

Welcome to ecommerce
            {/* <Button title="Home"/>
            <Button title="Services" onClick={()=>navigate("/services")}/>
            <Button title="ContactUs" onClick={()=>navigate("/contactus")}/>  
            <Button title="Product" onClick={()=>navigate("/product")}/> */}
        </div> 

        </>
     );
}
 
export default Home;