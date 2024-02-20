import Button from "../../components/buttons/Button";
import MyCard from "../../components/cards/MyCard";
import ProductCard from "../../components/cards/ProductCard";

const FeatureProduct = () => {
    return ( 
        <>
        <div className="mx-4 w-full flex justify-center my-20">
            <div >
                <div className="flex justify-between">
            <section className="font-bold text-black font-lexend-deca text-3xl my-6">Feature Product</section>
            <Button title="View All"></Button>
                </div>
            
        <div className="grid grid-cols-2 lg:grid-cols-4  w-full xl:w-2xl gap-5 cursor-pointer">
            <ProductCard id={1}/>
            <ProductCard id={2}/>
            <ProductCard id={3}/>
            <ProductCard id={4}/>
            <ProductCard id={5}/>
            <ProductCard id={6}/>
            <ProductCard id={7}/>
            <ProductCard id={8}/>
            
        </div>
            </div>
        
        </div>
        </>
     );
}
 
export default FeatureProduct;