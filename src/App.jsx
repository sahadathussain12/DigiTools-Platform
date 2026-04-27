
import { useState } from 'react'
import './App.css'
import Banner from './component/Banner'
import Model from './component/Model'
import Navber from './component/Navber'
import Primiyam from './component/Primiyam'
import Cart from './Cart'
import Step from './Step'
import Pricing from './Pricing'


const  getData = async()=> {
  const res = await fetch ('/data.json')
   return res.json()
}

const dataPromis = getData()

function App() {

  const [Active,setActive] = useState('Products')

  const [selectedCart, setSelectedCart] = useState([])
  console.log(selectedCart);
  
 

  return (
    <>
 
    <Navber selectedCart={selectedCart} setSelectedCart={setSelectedCart}/>
    <Banner/>
    <Primiyam/>
    <Model dataPromis = {dataPromis} Active={Active} setActive={setActive} selectedCart={selectedCart} setSelectedCart={setSelectedCart}/>
   { Active === 'Cart' && <Cart selectedCart={selectedCart} setSelectedCart={setSelectedCart}/>     } 

   <Step/>
   <Pricing/>
    </>
  )
}

export default App
