import User from "./assets/user.png"
import Pakage from './assets/package.png'
import roket from "./assets/rocket.png"

const Step = () => {
    return (
     

         <div className="max-w-[1200px] mx-auto py-12">
      
      {/* Header */}
      <div className="text-center space-y-3 mb-10">
        <h1 className="text-4xl font-bold text-gray-800">
          Get Started in 3 Steps
        </h1>
        <p className="text-gray-500">
          Start using premium digital tools in minutes, not hours.
        </p>
      </div>

     
      <div className="grid md:grid-cols-3 gap-6 px-4">

        {/* Card 1 */}
        <div className="relative bg-white border border-white rounded-xl shadow-lg p-6 text-center ">

          <div className="absolute top-4 right-4 bg-purple-600 text-white text-sm px-2 py-2 rounded-full">
            01
          </div>

          <div className="flex justify-center mb-4">
            <img
              src={User}
              alt=""
              className="bg-purple-100 rounded-full p-4 w-16 h-16"
            />
          </div>
             
          <h2 className="text-lg font-semibold mb-2">Create Account</h2>
          <p className="text-[#627382] text-sm">
            Sign up for free in seconds. No credit card required to get started.
          </p>
        </div>

        <div className="relative bg-white border border-white rounded-xl shadow-lg p-6 text-center hover:shadow-lg transition">

          <div className="absolute top-4 right-4 bg-purple-600 text-white text-sm px-2 py-2 rounded-full">
            02
          </div>

          <div className="flex justify-center mb-4">
            <img
              src={Pakage}
              alt=""
              className="bg-purple-100 rounded-full p-4 w-16 h-16"
            />
          </div>

          <h2 className="text-lg font-semibold mb-2">Choose Products</h2>
          <p className="text-gray-500 text-sm">
            Browse our catalog and select the tools that fit your needs.
          </p>
        </div>

        {/* Card 3 */}
        <div className="relative bg-white border border-white rounded-xl shadow-lg p-6 text-center hover:shadow-lg transition">

          <div className="absolute top-4 right-4 bg-purple-600 text-white text-sm px-2 py-2 rounded-full">
            03
          </div>

          <div className="flex justify-center mb-4">
            <img
              src={roket}
              alt=""
              className="bg-purple-100 rounded-full p-4 w-16 h-16"
            />
          </div>

          <h2 className="text-lg font-semibold mb-2">Start Creating</h2>
          <p className="text-gray-500 text-sm">
            Download and start using your premium tools immediately.
          </p>
        </div>

      </div>
    </div>
    );
};

export default Step;