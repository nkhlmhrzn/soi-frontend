import { Link, useNavigate } from "react-router-dom";
import Button from "../../components/buttons/Button";

const Home = () => {
const navigate= useNavigate()

    return ( 
        <>      
        <div className="flex gap-10">
            <Button title="Home"/>
            <Button title="Services" onClick={()=>navigate("/services")}/>
            <Button title="ContactUs" onClick={()=>navigate("/contactus")}/>   
        </div> 

        </>
     );
}
 
export default Home;