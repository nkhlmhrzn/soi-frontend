import Button from "../../components/buttons/Button"
import Input from "../../components/inputs/Input"


const Login=()=> {

  return (
    <>
    
<div className="flex flex-col justify-center items-center w-md h-md gap-4">

  <div className=" text-center ">
    <label>Username:</label><br></br>
      <Input/><br></br>
      <label>Password:</label><br></br>
      <Input />
        
  </div>
  <div className="">
      <Button title="login" onClick={()=> {console.log("login successful")}}  />
    
  </div>
</div>
    </>
  )
}

export default Login
