const Button = (props) => {
    const {title, onClick, ...remainingProps} = props;
    return ( 
            <button className="w-s rounded-xl bg-pink-600 text-white px-4 py-4  hover:bg-pink-500 "
            onClick={onClick}
            {...remainingProps}
            >
        {title}
        </button>
            
    );
}
 
export default Button;