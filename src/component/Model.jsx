import { use } from "react";
import ModelCard from "./ModelCard";
import Cart from "../Cart";

const Model = ({dataPromis,Active,setActive,selectedCart,setSelectedCart}) => {
  const models = use(dataPromis);

  return (
    <div>
      {/* Heading */}
      <div className="text-center mt-5 space-y-5">
        <h1 className="text-4xl font-bold">Premium Digital Tools</h1>

        <p className="max-w-2xl mx-auto text-gray-500">
          Choose from our curated collection of premium digital products
          designed to boost your productivity and creativity.
        </p>
      </div>

      {/* Toggle */}
      <div className="flex justify-center mt-8">
        <div className="flex bg-gray-100 rounded-full p-1">
          <button
            onClick={() => setActive("Products")}
            className={`px-8 py-3 rounded-full transition-all duration-300 ${
              Active === "Products"
                ? "bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white"
                : "text-black"
            }`}
          >
            Products
          </button>

          <button
            onClick={() => setActive("Cart")}
            className={`px-8 py-3 rounded-full transition-all duration-300 ${
              Active === "Cart"
                ? "bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white"
                : "text-black"
            }`}
          >
            Cart ({selectedCart.length})
          </button>
        </div>
      </div>

      {/* Products */}
      {Active === "Products" && (
        <div className="max-w-[1200px] mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
          {models.map((item) => (
            <ModelCard
              key={item.id}
              item={item}
              selectedCart={selectedCart}
              setSelectedCart={setSelectedCart}
            />
          ))}
        </div>
      )}

      {/* Cart */}
      {Active === "Cart" && (
        <Cart selectedCart={selectedCart} setSelectedCart={setSelectedCart} />
      )}
    </div>
  );
};

export default Model;
