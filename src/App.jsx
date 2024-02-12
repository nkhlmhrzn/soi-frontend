
import { useEffect, useState } from 'react'
import './App.css'
import Button from './components/buttons/Button'
import Input from './components/inputs/Input'
import Model from './components/model/Model'
import Login from './pages/auth/Login'
import ProductCard from './components/cards/ProductCard'
import MyCard from './components/cards/MyCard'
import Footer from './components/footer/Footer'

function App() {
  return (
    <>
     
    </>
  )
}

export default App

    // 3 <div className="flex justify-around">
    //   <ProductCard/>
    //   <MyCard/>
    // </div>

// 1 const [isVisible,setIsVisible]= useState(false)
// const [title,setTitle] = useState("login")
{/* <Button title={title} onClick={()=>setIsVisible(true)}/>
<Model isVisible={isVisible} CloseModel={()=>setIsVisible(false)}><Login/></Model> */}


// 2 const [data,setData]=useState(10)
// const [data1,setData1] =useState(20)
// const [add,setAdd] = useState(0)
// const sum=()=>{
//   setAdd(data+data1)
// }
// useEffect(()=>{
//   sum()
// },[data,data1])
{/* <div className="flex flex-col gap-4 justify-center items-center">
<div className="flex gap-5 justify-center items-center">
  <Button title="-" onClick={()=>{(setData(data-1))}}/>
  {data}
  <Button title="+" onClick={()=>{(setData(data+1))}}/>
</div>
<div className="flex gap-5 justify-center items-center">
  <Button title="-" onClick={()=>{setData1(data1-1)}}/>
  {data1}
  <Button title="+" onClick={()=>{setData1(data1+1)}}/>
</div>
The sum is : {add}
</div> */}