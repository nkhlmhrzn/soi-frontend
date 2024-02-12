import { Link, useNavigate } from "react-router-dom";
import Button from "../../components/buttons/Button";

const Home = () => {
const navigate= useNavigate()

    return ( 
        <>       
            <Button title="Home"/>
            <Button title="Services" onClick={()=>navigate("/services")}/>
            <Button title="Contact Us" conClick={()=>navigate("/contactus")}/>
        </>
     );
}
 
export default Home;