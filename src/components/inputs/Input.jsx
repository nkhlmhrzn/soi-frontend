const Input = ({type, placeholder,...remainingProps}) => {
    return ( 
        <>
        <input 
        type={type ? type : "text"}
        className="p-2 w-md rounded-md placeholder:font-lexend-deca border border-blue-500"
        placeholder={placeholder ?? ""}
        />
        </>
     );
}
 
export default Input;