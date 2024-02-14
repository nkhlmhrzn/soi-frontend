import { useState } from "react";

const ProductProfile = () => {
    const img = [
        {id:1, url:"https://i.pinimg.com/564x/dc/62/3b/dc623bfb53c99dc812e04280e554a01e.jpg"},
        {id:2, url:"https://i.pinimg.com/736x/40/6f/99/406f9914a7c2363a3a6d00eb50239104.jpg"},
        {id:3, url:"https://i.pinimg.com/236x/db/a6/68/dba668436471bc99eb368874e755afb3.jpg"},
        {id:4, url:"https://i.pinimg.com/236x/8e/8b/4d/8e8b4dbe9c21e7baf7494ef7936291d6.jpg"},
    ]
    const [active,setactive] = useState(img[0])
    return ( 
        <>
            <div className="flex flex-col gap-4 bg-gray-200 p-6">
                <div className="h-sm w-sm">
                    <img src={active.url} alt="" className="w-full h-full" />
                </div>
                <div className="flex gap-4 bg-red-300 p-4 ">
                        {img.map((imgs)=>{
                            return (
                                <div className={`h-20 w-20 rounded-md overflow-hidden   border-2  ${active.id===imgs.id ? "border-blue-600":"opacity-50"} hover:scale-110 trasition duration-300`} onClick={()=>{setactive(imgs)}}>
                                    <img src={imgs.url} alt="" className="w-full h-full"/>
                                </div>
                            )
                        })}
                    
                </div>
            </div>
            
        </>
     );
}
 
export default ProductProfile;