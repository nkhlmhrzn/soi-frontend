const Button = (props) => {
    const {title, onClick, ...remainingProps} = props;
    return ( 
            <button className="w-s h-s rounded-md bg-black text-white px-4 py-4  hover:bg-gray-500 "
            onClick={onClick}
            {...remainingProps}
            >
        {title}
        </button>
            
    );
}
 
export default Button;