const Model=({isVisible,CloseModel,children}) =>{
    if(!isVisible){
        return null;
    }
    const handleClose=(e)=>{
        if(e.target.id === "close"){
            CloseModel();
        } 
    }

    return(
        <>
            <div className="fixed inset-0 bg-black bg-opacity-20 z-40 flex items-center justify-center"
            onClick={handleClose}>
                <div className="w-auto" flex flex-col>
                    <div className="flex justify-end">
                        <button id="close">x</button>
                    </div>
                    <div className="bg-white p-4 rounded-md">
                    {children}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Model;