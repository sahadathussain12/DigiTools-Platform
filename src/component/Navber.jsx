import { BsCart } from "react-icons/bs";

const Navber = ({selectedCart}) => {
    return (
        <div className="max-w-[1200px] mx-auto">
            <div className="navbar bg-white shadow-md px-6">
      
  
      <div className="navbar-start ">
        <a className="text-2xl font-bold text-transparent bg-clip-text  bg-gradient-to-r from-[#4F39F6] to-[#9514FA]">
          DigiTools
        </a>
      </div>

   
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-gray-600 font-medium">
          <li><a>Products</a></li>
          <li><a>Features</a></li>
          <li><a>Pricing</a></li>
          <li><a>Testimonials</a></li>
          <li><a>FAQ</a></li>
        </ul>
      </div>

{/*     
      <div className="navbar-end gap-4">
        <button><BsCart /></button>
        <p className="text-gray-600">Login</p>
        <a className="btn bg-purple-600 text-white border-none rounded-full px-6">
          Get Started
        </a>
      </div> */}
      <div className="navbar-end gap-4">
  
  
  <div className="relative">
    <button className="text-xl text-gray-700">
      <BsCart />
    </button>
    {/* <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full ">
      {selectedCart.length}
    </span> */}
        {selectedCart.length > 0 && (
              <span className="absolute -top-3 -right-2 bg-red-500 text-white w-5 h-5 rounded-full flex items-center justify-center text-xs">
                {selectedCart.length}
              </span>
            )}

  </div>

  <p className="text-gray-600 cursor-pointer hover:text-purple-600">
    Login
  </p>

  <a className="btn bg-purple-600 text-white border-none rounded-full px-6">
    Get Started
  </a>

</div>

    </div>
        </div>
    );
};

export default Navber;