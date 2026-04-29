import play from "../assets/Play.png"
import Reactangle from "../assets/Rectangle 2.png"

import banner from "../assets/banner.png"
const Banner = () => {
    return (
        <div className="max-w-[1200px] mx-auto px-6 py-16 flex flex-col lg:flex-row items-center justify-between gap-10">

<div className="flex-1">
        <img
          src={banner}
          alt="banner"
          className="rounded-xl shadow-lg w-full"
        />
      </div>


      <div className="flex-1">

 
  <div className=" flex justify-center gap-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full w-fit mb-6">
    <img src={Reactangle} alt="" className="w-4 h-4 block "/> New: AI-Powered Tools Available
  </div>


  <div className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
    Supercharge Your <br />
    Digital Workflow
  </div>

 
  <div className="text-gray-500 mt-6 max-w-lg">
    Access premium AI tools, design assets, templates, and productivity software — all in one place. Start creating faster today.
  </div>


  <div className="flex gap-4 mt-8">

    <button className="bg-purple-600 text-white  rounded-full hover:bg-purple-700">
      Explore Products
    </button>

    <button className=" flex items-center gap-2 border border-purple-600 text-purple-600  rounded-full hover:bg-purple-50">
    <img src={play} alt="" />  Watch Demo
    </button>

  </div>

</div>

   
      

    </div>
  );
};


export default Banner;

