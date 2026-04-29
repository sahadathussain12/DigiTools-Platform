import { use } from "react";
import ModelCard from "./ModelCard";


const Model = ({dataPromis,Active,setActive,selectedCart, setSelectedCart}) => {
     const  models = use(dataPromis) 
     console.log(models);
    return (
        <div>
           
                <div className="text-center mt-5 space-y-5">
                    <h1 className="text-4xl font-bold">Premium Digital Tools</h1>
                   <p>Choose from our curated collection of premium digital products designedto boost your productivity and creativity.</p>
            
                </div>
               <div className="tabs  justify-center mt-5 ">
                 <input
                   type="radio"
                   name="my_tabs_1"
                   className="tab bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white rounded-full px-10"
                   aria-label="Products"
                   onClick={() => setActive("Products")}
                   defaultChecked
                 />
               
                 <input
                   type="radio"
                   name="my_tabs_1"
                   className="tab  rounded-full w-40 "
                   aria-label= {`Cart (${selectedCart.length})`}
                   onClick={() => setActive("Cart")}
                 />
               </div>

                <div className=" max-w-[1200px] mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
                    {
                      models.map(item => Active === "Products" &&(
                        <ModelCard key={item.id} item={item} selectedCart={selectedCart} setSelectedCart={setSelectedCart}/>
                      )

                      )
                    }
                </div>


                       </div>
                   );
               };

export default Model;