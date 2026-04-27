import { toast } from "react-toastify";


const Cart = ({selectedCart, setSelectedCart}) => {



       const  totalPrice = selectedCart.reduce((sum, item)=> sum + item.price, 0)


        const handleDeleted = ()=>{
            setSelectedCart([])
            toast.success('All card deleted')
        }

        const handleCartDelete = (item)=>{
            const filterdelete = selectedCart.filter(del => del.id !== item.id)
            // selectedCart(filterdelete);
            setSelectedCart(filterdelete);
            toast.success('card deleted')
        }



    return (
        <div className="p-10 max-w-[1200px] mx-auto border border-white shadow-lg">
            <h1 className="text-3xl font-bold">Your Card</h1>
            {
                selectedCart.map(item => <div className=" " key={item.id}>
                    <div className="flex justify-between bg-white mt-5">
                        <div className="flex items-center gap-4">
                         <img src={item.icon} alt="" className="w-15 h-15 p-2 shadow-2xl rounded-full border border-white shadow-2xl" />
                        <div>
                             <p className="text-2xl ">{item.name}</p>
                             <p>${item.price}/month</p>
                        </div>
                        </div>
                       
                        <button onClick={()=>handleCartDelete(item)} className="ruonded-lg text-red-500">remove</button>
                    </div>

                    
                   
                </div>)
                
                
            }
            <div className="flex justify-between bg-white  mt-5 p-4">
                        <p className="text-2xl">total</p>
                        <p>${totalPrice}</p>
                    </div>


                    <div onClick={()=>handleDeleted()} className="w-full text-center bg-purple-600 rounded-xl p-4 text-2xl text-white">
                        <button>Proceed to Checkout</button>
                    </div>
             
        </div>
    );
};

export default Cart;