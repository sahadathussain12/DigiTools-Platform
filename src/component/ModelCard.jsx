import { useState } from "react";
import { toast } from "react-toastify";


const ModelCard = ({item,selectedCart, setSelectedCart}) => {

  const [Click,setClicked] = useState(false)


   const handleSelectedCard = ()=>{
    setClicked(true)
    
    const isFound = selectedCart.find(i => i.id === item.id)
    if(isFound){
        toast.error('item alrady added in card')
        return;
    }else{
      setSelectedCart([...selectedCart,item])
      toast.success('cart added')
    }
    
     
     
    }
    console.log(selectedCart);
    

    // console.log(item);
    return (
        <div className="shadow-sm space-y-5">
          <div className="card w-96 bg-base-100 space-y-5">
  <div className="flex justify-end p-3">

    <button
      className={`px-3 py-1 rounded-full text-xs font-medium
        ${
          item.tag === "Best Seller"
            ? "bg-orange-100 text-orange-600"
            : item.tag === "Popular"
            ? "bg-blue-100 text-blue-600"
            : item.tag === "New"
            ? "bg-purple-100 text-purple-600"
            : ""
        }`}
    >
      {item.tag}
    </button>

  </div>
</div>
  <div className="card-body p-3">
   <div className="w-20 h-20 border border-white rounded-full  object-contain">
    <img src={item.icon} alt="" />
   </div>
    <div className="flex justify-between">
      <h2 className="text-2xl font-bold">{item.name}</h2>
      
    </div>
  <div>
    <p>{item.description}</p>
    <p className="text-2xl font-bold">${item.price}/month</p>
  </div>
 <div>
  {item.features.map((feature, index) => (
    <p key={index}>✔ {feature}</p>
  ))}
</div>
    <div className="mt-6">
      <button onClick={()=>handleSelectedCard()} className="btn btn-primary btn-block rounded-2xl">{Click ? "Sussess" :  "Bye now"}</button>
    </div>
  </div>
</div>
            
        
    );
};

export default ModelCard;